import { launchConfig, pons, referenceAsset, referenceDisclaimer } from "@/lib/site-config";

function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string | null;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-4 last:border-none sm:flex-row sm:items-center sm:justify-between">
      <span className="text-xs font-medium uppercase tracking-wider text-platinum/50">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-signal-300 underline decoration-signal-500/30 underline-offset-4 hover:text-signal-200"
        >
          {value}
        </a>
      ) : (
        <span className="font-mono text-sm text-platinum/70">{value}</span>
      )}
    </div>
  );
}

const COMING_AT_LAUNCH = "Coming at launch";

export function Transparency() {
  return (
    <section
      id="transparency"
      className="mx-auto max-w-4xl px-5 py-24 sm:px-8"
    >
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-signal-400">
          Transparency
        </p>
        <h2 className="mt-3 font-serif text-3xl text-platinum sm:text-4xl">
          Verify it yourself
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-sm text-platinum/55">
          Every claim SIGNL makes should be checkable onchain. Anything not
          live yet is labeled plainly &mdash; we don&rsquo;t invent numbers to
          fill the gap.
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-ink-soft/60 px-6">
        <Row
          label="Token contract"
          value={launchConfig.tokenAddress ?? COMING_AT_LAUNCH}
        />
        <Row
          label="PONS launch"
          value={launchConfig.ponsLaunchUrl ? "View on PONS" : COMING_AT_LAUNCH}
          href={launchConfig.ponsLaunchUrl}
        />
        <Row label="Fee mechanism" value={COMING_AT_LAUNCH} />
        <Row label="Transactions" value={COMING_AT_LAUNCH} />
        <Row label="Total fees converted" value={COMING_AT_LAUNCH} />
        <Row label="Total paid to holders" value={COMING_AT_LAUNCH} />
        <Row
          label={`Reference ticker ($${referenceAsset.ticker})`}
          value="Illustrative only"
        />
      </div>

      <p className="mt-6 text-center text-xs text-platinum/35">
        Launched via{" "}
        <a
          href={pons.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-signal-500/30 underline-offset-4 hover:text-signal-300"
        >
          PONS
        </a>{" "}
        on Robinhood Chain. Contract address and payout mechanism details will
        be published here the moment they exist &mdash; verify them
        independently before trusting any link claiming to be SIGNL.
      </p>
      <p className="mx-auto mt-4 max-w-xl text-balance text-center text-xs text-platinum/35">
        {referenceDisclaimer()}
      </p>
    </section>
  );
}
