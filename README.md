# SIGNL

**TRADE MEMES. STACK THE SIGNAL.**

A Robinhood Chain memecoin site: every trade generates fees that are
converted and paid out directly to holders, proportional to their
holdings, through a mechanism that will be disclosed and made
independently verifiable once it's live. Built as a fast, premium,
mobile-first MVP — no complex DeFi mechanics, no fabricated numbers.

## Reference asset — important

$SIGNL's brand and narrative are built around real-time market "signal."
The site references a real, well-known public company/ticker
(NVIDIA / `$NVDA` by default) purely as a **cultural/thematic hook** — the
same way meme culture references real tickers without claiming
affiliation. **$SIGNL is not affiliated with, endorsed by, or backed by
that company or any other.** No logos or trademarks from any referenced
company appear anywhere in this codebase.

- The reference ticker/company are env-driven
  (`NEXT_PUBLIC_REFERENCE_TICKER`, `NEXT_PUBLIC_REFERENCE_COMPANY_NAME` in
  `src/lib/site-config.ts`) — swappable without touching code.
- A visible disclaimer ("$SIGNL is an independent community project. Not
  affiliated with...") appears above the fold near the hero and again in
  the footer/transparency section.
- No live stock price is fetched or displayed unless a real, properly
  licensed market-data API key is configured via
  `NEXT_PUBLIC_MARKET_DATA_API_KEY`. By default (no key), the reference
  ticker is shown as a static, clearly-labeled "Reference only, not
  real-time" example — never a fabricated live-looking price feed.

## Status: pre-launch

`$SIGNL` has **not launched yet**. The Buy button shows "SIGNL Not Live
Yet" and every dashboard/transparency figure is either `0` or "Coming at
launch" until real values exist. See `.env.example` for the switches that
turn this on once the token and payout mechanism are real:

- `NEXT_PUBLIC_SIGNL_LIVE` — flips the Buy button to a real link once true
- `NEXT_PUBLIC_SIGNL_TOKEN_ADDRESS` — shown in the Transparency section
  once set
- `NEXT_PUBLIC_SIGNL_PONS_URL` / `..._BUY_URL` — where Buy/PONS links route

Live on-chain stats (total distributed, volume, holders, transactions) are
wired through `src/lib/data.ts` and intentionally return `0`/demo values
with a visible badge — swap in real reads (an indexer, subgraph, or direct
contract calls) when the payout mechanism exists. **Never replace the demo
badge with real-looking numbers that aren't backed by verifiable on-chain
data.**

## Important: verify before trusting any address in this repo

- **Robinhood Chain** network details (chain ID `4663`, RPC, explorer) in
  `src/lib/chain.ts` were gathered from public third-party sources
  (chainlist.org, trustswap.com) on 2026-08-27, not from
  `docs.robinhood.com/chain` directly (unreachable from the build
  environment). Re-confirm against the official docs before mainnet use.
- **PONS** contract/factory addresses are deliberately **not hardcoded**
  anywhere in this codebase. Research surfaced candidate addresses that
  could not be independently verified — do not trust them from any AI
  output, including this one. Confirm current addresses directly from
  PONS's own docs/app, then set `NEXT_PUBLIC_PONS_FACTORY_ADDRESS`.
- Robinhood Chain reportedly has **no native gas token** — gas is paid in
  ETH, and there is no official Robinhood Chain airdrop token. Treat any
  token claiming otherwise as suspicious.

## Stack

Next.js 16 (App Router, TypeScript) + Tailwind CSS v4 + Framer Motion +
wagmi v3 / viem for wallet connect and Robinhood Chain network handling.
No backend — this is a static-first marketing/product site with a small
client-side wallet layer.

## Structure

```
src/
  app/            routes, metadata, OG image, icon, robots/sitemap
  components/     Hero, SignalWave (CSS/SVG oscilloscope + radar hero
                  visual), StatsDashboard, HowItWorks, SignalToast
                  (+ showcase), Transparency, Navbar, Footer,
                  WalletConnect, BuyButton
  lib/
    chain.ts        Robinhood Chain viem chain definition
    wagmiConfig.ts   wagmi config (injected connector only)
    site-config.ts   site copy + launch/PONS/reference-asset config
                     (env-driven)
    data.ts          demo dashboard stats + demo payout events
```

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build & deploy

```bash
npm run build   # verified passing
npm run start   # production server, for local smoke-testing
```

Deploys as a standard Next.js app on Vercel — connect the repo, set the
env vars from `.env.example` in the Vercel project settings, deploy.

## Wallet connect

Uses `wagmi`'s `injected()` connector (MetaMask, Rabby, Coinbase Wallet
extension, etc. — no WalletConnect/project ID required, keeping deps
minimal for the MVP). Detects whether the connected wallet is on Robinhood
Chain and prompts "Switch to Robinhood Chain" if not. No private keys are
ever requested or stored.
