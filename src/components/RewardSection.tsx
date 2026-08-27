import { SignalToastShowcase } from "./SignalToast";

export function RewardSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-signal-400">
          Payout UX
        </p>
        <h2 className="mt-3 font-serif text-3xl text-platinum sm:text-4xl">
          Built to screenshot
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-sm text-platinum/55">
          A reusable payout notification, styled like a modern brokerage app.
          Once the direct-payout mechanism is live, this connects to real
          payout events &mdash; for now it&rsquo;s a labeled preview.
        </p>
      </div>

      <SignalToastShowcase />
    </section>
  );
}
