"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type ResetFiltersLinkProps = ComponentProps<typeof Link>;

function clearFormControls(form: HTMLFormElement) {
  for (const element of Array.from(form.elements)) {
    if (element instanceof HTMLInputElement) {
      if (element.type === "checkbox" || element.type === "radio") {
        element.checked = false;
      } else {
        element.value = "";
      }
    }

    if (element instanceof HTMLSelectElement) {
      element.selectedIndex = 0;
    }
  }
}

export default function ResetFiltersLink({
  onClick,
  ...props
}: ResetFiltersLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const form = event.currentTarget.closest("form");

    if (form instanceof HTMLFormElement) {
      clearFormControls(form);
    }

    onClick?.(event);
  }

  return <Link {...props} onClick={handleClick} />;
}
