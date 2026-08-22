# Lens Finance — Design System

> Your money. Your freedom.

Lens is a **privacy-first personal finance tracker** for iOS. Everything stays on the device (Isar, on-device database — no cloud, no tracking, no account required to start). The product is deliberately calm, intelligent, and trustworthy: the daily "safe to spend" number is the hero, and everything else supports it.

Lens serves the **UK, Japan, and other markets as equals** — it is multi-currency and multi-locale. Copy, screenshots, and examples should mix £ and ¥, UK and Japan scenarios; never frame the product as UK-first (except for genuinely market-specific features like UK Tax Tools). Ships in English (en-GB) and Japanese (ja), both first-class.

## Sources this system was built from

- **Codebase:** `lens-app copy/` — the Flutter/Dart mobile app (read-only, mounted locally). Ground truth for tokens.
  - `lib/core/theme/` — `app_colours.dart`, `app_typography.dart`, `app_radii.dart`, `app_shadows.dart`, `app_spacing.dart`, `app_theme.dart`
  - `lib/core/widgets/lens_mark.dart` — the brand-mark geometry (ported to `assets/logo.svg`)
  - `lib/features/` — the real screens (today, transactions, insights, goals, recurring, reports, paywall, settings, ai_chat, onboarding …)
  - `CLAUDE.md` — engineering + market rules
- **Brand guidelines:** `docs/brand/lens_brand_guidelines.docx` (v1.1, April 2026) — the authoritative brand spec (colour rules, voice, component patterns).
- **App Store screenshots:** `Lens App Store Screenshots/` (20 PNGs, en-GB + ja) — used as a visual reference only, not a source of truth.

> Note on conflicts: where the Dart code and the brand doc disagree, the doc's *intent* is captured but the running code's values are noted. Radii: the brand doc states card 16 / button 14 / small 10; the shipped `app_radii.dart` uses card 12 / button 12 / small 8. This system follows the **brand doc** values (16/14/10) as the canonical design intent — flag if you need the exact shipped values instead. The hero amount is 56px in the brand doc (and in the App Store screenshots); the code's shared `monoLarge` is 32px because the hero widget overrides it — both are tokenised (`--mono-hero-size`, `--mono-lg-size`).

---

## CONTENT FUNDAMENTALS

Lens copy is **classy, understated, and warm**. The app is confident about what it does and doesn't over-explain. It is never self-congratulatory, never hand-holding, and never a guilt machine.

- **Person & tone:** speaks *to* the user ("you"), plainly and kindly. Supportive, not clinical. "Nice! £247 ahead", never "Positive variance detected. You are performing above your budget target."
- **Casing:** sentence case for copy and titles. ALL CAPS only for small section eyebrows ("SAFE TO SPEND TODAY", "FINANCIAL RUNWAY"), tracked out ~0.08em.
- **No em dashes. Anywhere.** Not in UI, code comments, docs, or commits. Use commas, full stops, or rewrite.
- **No emoji as a system device.** A single expressive glyph can appear inside a warm nudge (e.g. a flame on a streak card) but emoji are never load-bearing UI.
- **Status copy patterns:**
  - Ahead: `"Nice! [amount] ahead"`
  - Behind: `"[amount] behind pace"`
  - Over budget: `"[amount] over monthly budget"` — **only** when the pot is exhausted (`monthSpentSoFar > monthlyBudget`), never when merely behind pace. These are different truths.
  - On track: `"Right on track"` · Goal behind: `"Behind schedule"` · Goal done: `"Goal completed!"`
  - Empty: `"No [items] yet"`, never "empty state" · Gated: `"Upgrade to Pro to [action]"`
- **Numbers:** symbol then amount, no space (`£24.50`, `¥2,450`, never `GBP 24.50`). Two decimals under £1,000; yen is whole numbers only. Comma separators on thousands. Percentages one decimal. Dates follow app language (`12 Apr 2026` en-GB, `2026年4月12日` ja).
- **Japanese** is warm and natural, casual-polite (desu/masu), never stiff keigo. "いいね！£247 余裕あり" not "正の分散".

---

## VISUAL FOUNDATIONS

**Overall vibe:** calm, cool, contained. A near-white/blue-black canvas, one saturated Deep Space Blue anchor, colour used only where it means something. Generous white space, soft corners, clean typography. It should feel *local and personal*, never like corporate fintech (no cold enterprise blues, no vault/bank imagery, no sync animations).

- **Colour:** two modes sharing semantic roles. Light default is iOS-grey-6 (`#F2F2F7`) scaffold + white cards; dark is a deep blue-black ramp (`#10101A` → `#16192A` → `#1E2340`) in the same hue family as the hero. The **Deep Space Blue (#1D3557) hero and the FAB are immutable** — a flat solid fill, identical in both modes, the brand anchor. Interactive primary is Rich Sky Blue (`#2563EB` light / `#60A5FA` dark). Accent Strawberry Red, Success Deep Green, Warning Amber, Premium Violet. **Colour on text is the exception, not the rule** (see the text-colour rule card).
- **Type:** exactly two typefaces. **Outfit** for all UI text (300–800), **JetBrains Mono** for every monetary number. Never mix roles — money is never Outfit, labels are never mono. Hero amount 56px/700/-2px; mono uses tabular figures.
- **Backgrounds:** flat solid surfaces. No photography in-product. The only "imagery" is the soft multi-colour mesh (blue / violet / mint / grey blobs) behind onboarding and App Store collateral — used sparingly, on the welcome flow. No textures, no repeating patterns, no flat surfaces beyond the sacred hero. The Deep Space hero is a flat solid `#1D3557`, both modes.
- **Cards:** flat, single elevation. 16px radius, hairline border (0.5px light / 1px dark). Subtle drop shadow in **light mode only** (`0 2px 8px rgba(0,0,0,.04)`); dark surfaces are shadowless with borders doing the work. The Win card is the exception that carries a Frosted Mint (`#A8DADC`) border.
- **Corner radii:** cards 16, buttons/inputs 14, chips/badges/dots 10, progress bars 6, status pills fully rounded.
- **Spacing:** 8px base grid — 4 / 8 / 12 / 16 / 24 / 32. 16px is the default screen edge and card padding.
- **Motion:** understated. 250ms `easeOutCubic` for transitions; press feedback is a scale to 0.98; the hero amount counts up (1400ms `easeOutQuart`, 350ms delay). No bounces, no flourish.
- **States:** hover on filled buttons brightens ~12%; secondary/tertiary drop opacity or add a faint primary tint. Press = 0.98 scale. Focus = 2px primary border on inputs.
- **Transparency & blur:** used only on the hero (white at 12–80% for pills, tracks, fills) and the modal scrim (black ~35%). No frosted-glass chrome elsewhere.
- **Layout:** fixed bottom nav with a centred Deep Space FAB; content scrolls beneath. Sheets slide up from the bottom with a 20px top radius.

---

## ICONOGRAPHY

Lens uses the **Material Symbols (Rounded)** icon set — the web equivalent of the Flutter Material icons the app ships. This system loads **Material Symbols Rounded** from Google Fonts (see `tokens/fonts.css`) and wraps it in the `Icon` component.

- **Style:** outlined by default at 400 weight; the **filled** variant marks active states (e.g. the current bottom-nav tab). Rounded optical style throughout.
- **Common glyphs:** `calendar_month` (Today), `receipt_long` (Transactions), `lightbulb` (Insights), `more_horiz` (More), `add` (FAB), `currency_exchange` (money — **always this, never a `$`**), `savings`, `flag` (goals), `autorenew` (recurring), `summarize` (reports), `workspace_premium` (Pro), `local_fire_department` (streaks), `subscriptions`.
- **Emoji / unicode:** not used as an icon system. A lone expressive glyph may appear inside a warm nudge, never as functional UI.
- **Substitution flag:** the app's icons are Flutter Material icons; Material Symbols Rounded is the faithful web match (same names, same rounded style). If you need pixel-exact parity with a specific shipped glyph, pull it from the codebase.
- **Logo mark:** a circle with a horizontal line through the centre (white ring + Frosted Mint line on Deep Space; Deep Space ring + Sky Blue line on light). Ported exactly from `lens_mark.dart` to `assets/logo.svg` (fixed colours) and `assets/logo-mono.svg` (`currentColor`), and available as the `Logo` component. App-icon PNGs are in `assets/` (`icon_1024_light/dark.png`, `lens_logo_light/dark.png`).

> **Fonts:** Outfit, JetBrains Mono, and Material Symbols Rounded are all Google Fonts, loaded via `@import` in `tokens/fonts.css` — no local binaries needed and no substitution required. If you want them self-hosted, drop the `.ttf`s in `assets/fonts/` and swap the imports for `@font-face`.

---

## Components (16)

React primitives in `components/<group>/`, each with a `.jsx`, a `.d.ts` props contract, and a `.prompt.md` usage note. Mount via `const { Name } = window.LensFinanceDesignSystem_0f4642` after loading `_ds_bundle.js`.

- **buttons/** — `Button` (primary/secondary/tertiary/destructive · sm/md), `FAB`
- **brand/** — `Icon` (Material Symbols wrapper), `Logo` (mark + wordmark)
- **surfaces/** — `Card`, `HeroCard` (the signature safe-to-spend surface), `WinCard`
- **data-display/** — `MoneyText`, `StatCard`, `TransactionItem`, `ProgressBar`
- **feedback/** — `StatusPill`, `Badge`
- **forms/** — `Input`, `SegmentedControl`
- **navigation/** — `BottomNav` (tab bar with centred FAB)

### Intentional additions
The Flutter app has no standalone "MoneyText" or "Badge" widget class — its money formatting and pills live inline in feature widgets. They are extracted here as primitives because every surface needs them; the values (JetBrains Mono scale, pale-blue count pill, violet Pro tag) are taken directly from the brand doc and screenshots.

---

## UI Kits

- **`ui_kits/lens-app/`** — interactive iOS app recreation: Welcome → Today (hero, starters, streak, goals), Transactions (grouped rows), Insights (runway, sparkline), More + the FAB Add-transaction sheet. Composed entirely from the primitives above. See its `README.md`.

---

## Foundation cards (Design System tab)

Specimen cards live in `guidelines/`, grouped as **Colors** (brand anchor, semantic palette, surfaces, text-colour rule), **Type** (Outfit UI scale, JetBrains Mono financial scale), **Spacing** (scale, radii & elevation), and **Brand** (logo lockups, voice & tone). Each links `styles.css` for real tokens.

---

## Root index / manifest

| Path | What |
|------|------|
| `styles.css` | Global entry — imports every token + font file |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `fonts.css` |
| `components/` | 16 React primitives across 7 groups (above) |
| `ui_kits/lens-app/` | Interactive iOS app recreation |
| `guidelines/` | Foundation specimen cards |
| `assets/` | `logo.svg`, `logo-mono.svg`, app-icon + logo PNGs, `faceid.png` |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-Skills manifest (portable to Claude Code) |
| `readme.md` | This file |

Namespace for the compiled bundle: `window.LensFinanceDesignSystem_0f4642`.
