"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { demoPayoutEvents, type PayoutEvent } from "@/lib/data";
import { DemoBadge } from "./ui/DemoBadge";

function SignalIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="h-9 w-9 shrink-0 rounded-full bg-signal-500/10"
      aria-hidden
    >
      <circle cx="18" cy="18" r="17" fill="none" stroke="#3DE8FF" strokeOpacity={0.4} />
      <path
        d="M4,18 L10,18 L13,10 L17,26 L21,6 L25,22 L28,18 L32,18"
        fill="none"
        stroke="#3DE8FF"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ToastCard({ event }: { event: PayoutEvent }) {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-signal-500/25 bg-ink-elevated/95 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <SignalIcon />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-platinum/70">
              SIGNL
            </p>
            <p className="text-[11px] text-platinum/45">Signal received</p>
          </div>
        </div>
        <DemoBadge label="Preview" />
      </div>
      <p className="mt-3 font-mono text-2xl text-signal-300">
        +${event.amountUsd.toFixed(2)}
      </p>
      <p className="mt-1 text-[11px] text-platinum/45">
        Paid directly to holders.
      </p>
    </div>
  );
}

/**
 * Reusable payout-notification component, styled like a modern brokerage
 * push notification. Intended to (a) later bind to real payout events once
 * the direct-payout mechanism is live, and (b) work well as a standalone
 * screenshot for social. Always carries a visible "Preview" badge while
 * running on demo data — never remove the badge to make demo output look
 * real.
 */
export function SignalToast({ event }: { event: PayoutEvent }) {
  return <ToastCard event={event} />;
}

export function SignalToastShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % demoPayoutEvents.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const event = demoPayoutEvents[index];

  return (
    <div className="flex flex-col items-center gap-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <ToastCard event={event} />
        </motion.div>
      </AnimatePresence>
      <p className="max-w-sm text-center text-xs text-platinum/40">
        Illustrative preview only — no payout mechanism is live yet. This
        will connect to real payout events once {"$SIGNL"} launches and the
        direct-payout mechanism goes live.
      </p>
    </div>
  );
}
