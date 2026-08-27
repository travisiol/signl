/**
 * ALL values in this file are placeholders for layout/demo purposes only.
 *
 * Per product requirement: never present fabricated numbers as live
 * blockchain statistics. Real stats stay at 0 / null and are clearly
 * badged "DEMO" in the UI until wired to a real indexer or contract reads.
 * Flip `LIVE_DATA_ENABLED` (or wire real data fetching in) once SIGNL has
 * an on-chain presence.
 */
export const LIVE_DATA_ENABLED = false;

export interface DashboardStats {
  totalDistributedUsd: number;
  totalVolumeUsd: number;
  holders: number;
  transactions: number;
}

export const dashboardStats: DashboardStats = {
  totalDistributedUsd: 0,
  totalVolumeUsd: 0,
  holders: 0,
  transactions: 0,
};

export interface PayoutEvent {
  id: string;
  amountUsd: number;
}

/**
 * Sample payout events used ONLY to preview the notification component
 * (see components/SignalToast.tsx). These are explicitly labeled
 * "DEMO / PREVIEW" in the UI itself and are not derived from any real
 * transaction. Do not remove the demo badge when reusing this component.
 */
export const demoPayoutEvents: PayoutEvent[] = [
  { id: "demo-1", amountUsd: 24.18 },
  { id: "demo-2", amountUsd: 8.42 },
  { id: "demo-3", amountUsd: 112.5 },
];
