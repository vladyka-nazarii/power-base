"use client";

import { type FormEvent, type ReactNode, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

type AutoSubmitFormProps = {
  children: ReactNode;
  className?: string;
};

type FocusTarget = {
  name: string;
  value?: string;
  selectionStart?: number | null;
};

export default function AutoSubmitForm({
  children,
  className,
}: AutoSubmitFormProps) {
  const pathname = usePathname();
  const router = useRouter();
  const focusTarget = useRef<FocusTarget | null>(null);
  const searchSubmitTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (searchSubmitTimeout.current) {
        clearTimeout(searchSubmitTimeout.current);
      }
    };
  }, []);

  function rememberFocus(target: HTMLInputElement | HTMLSelectElement) {
    focusTarget.current = {
      name: target.name,
      value: target.value,
      selectionStart:
        target instanceof HTMLInputElement ? target.selectionStart : null,
    };
  }

  function restoreFocus() {
    const target = focusTarget.current;

    if (!target) {
      return;
    }

    const restore = () => {
      const element = [...document.getElementsByName(target.name)].find(
        (node) =>
          node instanceof HTMLInputElement ||
          node instanceof HTMLSelectElement
            ? target.value === undefined || node.value === target.value
            : false,
      );

      if (
        !(
          element instanceof HTMLInputElement ||
          element instanceof HTMLSelectElement
        )
      ) {
        return;
      }

      element.focus();

      if (
        element instanceof HTMLInputElement &&
        typeof target.selectionStart === "number"
      ) {
        element.setSelectionRange(target.selectionStart, target.selectionStart);
      }
    };

    window.setTimeout(restore, 0);
    window.setTimeout(restore, 120);
  }

  function submitForm(form: HTMLFormElement) {
    const params = new URLSearchParams();

    for (const [key, value] of new FormData(form)) {
      if (typeof value === "string" && value !== "") {
        params.append(key, value);
      }
    }

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
    restoreFocus();
  }

  function submitOnChoiceChange(event: FormEvent<HTMLFormElement>) {
    const target = event.target;

    if (
      !(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)
    ) {
      return;
    }

    const isChoiceControl =
      target instanceof HTMLSelectElement ||
      target.type === "checkbox" ||
      target.type === "radio";

    if (isChoiceControl) {
      rememberFocus(target);
      submitForm(event.currentTarget);
    }
  }

  function submitOnSearchInput(event: FormEvent<HTMLFormElement>) {
    const target = event.target;

    if (!(target instanceof HTMLInputElement) || target.name !== "q") {
      return;
    }

    const form = event.currentTarget;
    rememberFocus(target);

    if (searchSubmitTimeout.current) {
      clearTimeout(searchSubmitTimeout.current);
    }

    if (target.value === "") {
      submitForm(form);
      return;
    }

    searchSubmitTimeout.current = setTimeout(() => {
      submitForm(form);
    }, 200);
  }

  function submitOnEnter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const activeElement = document.activeElement;

    if (
      activeElement instanceof HTMLInputElement ||
      activeElement instanceof HTMLSelectElement
    ) {
      rememberFocus(activeElement);
    }

    submitForm(event.currentTarget);
  }

  return (
    <form
      className={className}
      onChange={submitOnChoiceChange}
      onInput={submitOnSearchInput}
      onSubmit={submitOnEnter}
    >
      {children}
    </form>
  );
}
