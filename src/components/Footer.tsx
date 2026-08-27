import { siteConfig, referenceDisclaimer } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-xs text-platinum/40 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Not
            affiliated with Robinhood Markets, Inc. or PONS.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="uppercase tracking-wider transition hover:text-signal-300"
            >
              X
            </a>
            <a
              href="#"
              className="uppercase tracking-wider transition hover:text-signal-300"
            >
              Telegram
            </a>
          </div>
        </div>
        <p className="max-w-2xl text-balance">
          {siteConfig.ticker} is an experimental token. Nothing here is
          financial advice. Data labeled &ldquo;DEMO&rdquo; or
          &ldquo;PREVIEW&rdquo; is illustrative only, not live blockchain
          data. {referenceDisclaimer()}
        </p>
      </div>
    </footer>
  );
}
