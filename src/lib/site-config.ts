export const siteConfig = {
  name: "SIGNL",
  ticker: "$SIGNL",
  tagline: "TRADE MEMES. STACK THE SIGNAL.",
  altTagline: "The memecoin that pays you back on every trade.",
  description:
    "A Robinhood Chain memecoin designed around a simple idea: every trade generates fees that are converted and paid out directly to holders, in proportion to their holdings.",
  seoDescription:
    "A signal-themed memecoin experiment built for Robinhood Chain.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://signl.example",
  x: "https://x.com/signl_onchain",
} as const;

/**
 * Reference asset — cultural/thematic hook only. $SIGNL is not affiliated
 * with, endorsed by, or backed by this (or any) company. It is referenced
 * the same way meme culture references real tickers without claiming
 * affiliation. Swappable via env vars so no company name/ticker is ever a
 * literal constant used for a financial claim.
 */
export const referenceAsset = {
  ticker: process.env.NEXT_PUBLIC_REFERENCE_TICKER ?? "NVDA",
  companyName: process.env.NEXT_PUBLIC_REFERENCE_COMPANY_NAME ?? "NVIDIA",
  /** Set only if a real, licensed market-data API key is configured. */
  liveDataEnabled: Boolean(
    process.env.NEXT_PUBLIC_MARKET_DATA_API_KEY &&
      process.env.NEXT_PUBLIC_MARKET_DATA_API_KEY.trim().length > 0,
  ),
} as const;

export function referenceDisclaimer(companyName: string = referenceAsset.companyName) {
  return `${siteConfig.name} is an independent community project. Not affiliated with, endorsed by, or sponsored by ${companyName} or any stock exchange.`;
}

/**
 * Launch / integration surface. None of these are confirmed live values —
 * everything here is either "not yet configured" or sourced from public
 * research that still needs to be reconfirmed against official docs before
 * go-live. See README for details. Do not treat any address below as
 * verified — they are wired through env vars precisely so nothing here
 * ends up hardcoded and shipped by accident.
 */
/** Treats both "unset" and "" the same way: not configured yet. */
function envOrNull(value: string | undefined): string | null {
  return value && value.trim().length > 0 ? value : null;
}

export const launchConfig = {
  isLive: process.env.NEXT_PUBLIC_SIGNL_LIVE === "true",
  tokenAddress: envOrNull(process.env.NEXT_PUBLIC_SIGNL_TOKEN_ADDRESS),
  ponsLaunchUrl: envOrNull(process.env.NEXT_PUBLIC_SIGNL_PONS_URL),
  buyUrl: envOrNull(process.env.NEXT_PUBLIC_SIGNL_BUY_URL),
} as const;

export const pons = {
  name: "PONS",
  homepage: "https://ponslaunchpad.com/",
  // Contract addresses for the PONS factory/router are intentionally NOT
  // hardcoded here. Automated research surfaced candidate addresses whose
  // provenance could not be independently verified in this session — do not
  // trust them. Confirm current, audited addresses directly from PONS's own
  // documentation/app before wiring any live launch logic, then set them
  // via env vars.
  factoryAddress: envOrNull(process.env.NEXT_PUBLIC_PONS_FACTORY_ADDRESS),
} as const;
