"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

/**
 * CSS/SVG "trading terminal" hero visual: a radar-sweep circle behind an
 * oscilloscope-style waveform trace, with a mouse-tracked glow. No WebGL /
 * 3D library and no external image assets — everything is gradients,
 * strokes, and Framer Motion, matching how GOLDR's GoldBar and VAULT100's
 * VaultDoor are built.
 */
export function SignalWave() {
  const ref = useRef<HTMLDivElement>(null);
  const glowX = useSpring(useMotionValue(50), { stiffness: 120, damping: 20 });
  const glowY = useSpring(useMotionValue(50), { stiffness: 120, damping: 20 });
  const glowBackground = useMotionTemplate`radial-gradient(420px circle at ${glowX}% ${glowY}%, rgba(61,232,255,0.22), transparent 70%)`;

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className="relative mx-auto aspect-[16/10] w-full max-w-md select-none overflow-hidden rounded-3xl border border-line bg-ink-elevated/70"
    >
      {/* ambient glow behind the panel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(14,165,233,0.25), transparent 75%)",
        }}
      />

      {/* radar sweep */}
      <div className="absolute inset-0 flex items-center justify-center opacity-70">
        <div className="relative h-[85%] aspect-square rounded-full border border-signal-500/20">
          <div className="absolute inset-[16%] rounded-full border border-signal-500/15" />
          <div className="absolute inset-[32%] rounded-full border border-signal-500/15" />
          <div className="absolute inset-[48%] rounded-full border border-signal-500/15" />
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(61,232,255,0.35), transparent 28%, transparent 100%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* oscilloscope waveform trace */}
      <svg
        viewBox="0 0 400 250"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="signal-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3DE8FF" stopOpacity="0" />
            <stop offset="15%" stopColor="#3DE8FF" stopOpacity="1" />
            <stop offset="85%" stopColor="#0EA5E9" stopOpacity="1" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,125 L40,125 L60,60 L80,190 L100,40 L120,210 L140,125 L180,125 L200,80 L220,170 L240,60 L260,190 L280,125 L320,125 L340,95 L360,155 L400,125"
          fill="none"
          stroke="url(#signal-line)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }}
        />
      </svg>

      {/* scanning cursor line */}
      <motion.div
        aria-hidden
        className="absolute inset-y-0 w-px bg-signal-300/70 shadow-[0_0_10px_rgba(125,236,255,0.8)]"
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
      />

      {/* label */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4">
        <span className="font-mono text-[10px] tracking-[0.3em] text-signal-300/70">
          $SIGNL
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-platinum/40">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-400 animate-pulse" />
          SIGNAL LIVE
        </span>
      </div>

      {/* cursor-follow glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBackground }}
      />
    </div>
  );
}
