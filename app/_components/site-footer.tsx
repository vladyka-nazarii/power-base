import { getDictionary } from "@/lib/i18n";

type SiteFooterProps = {
  dictionary: ReturnType<typeof getDictionary>;
};

export default function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className="flex min-h-14 items-center justify-center border-t border-black/10 px-5 text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
      <span>{dictionary.common.footer}</span>
    </footer>
  );
}
