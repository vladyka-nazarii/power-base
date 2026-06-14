import { getDictionary } from "@/lib/i18n";

type SiteFooterProps = {
  dictionary: ReturnType<typeof getDictionary>;
};

export default function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className="flex h-[40px] items-center justify-center border-t border-black/10 px-5">
      {dictionary.common.footer}
    </footer>
  );
}
