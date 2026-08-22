/* @ds-bundle: {"format":4,"namespace":"LensFinanceDesignSystem_0f4642","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"FAB","sourcePath":"components/buttons/FAB.jsx"},{"name":"MoneyText","sourcePath":"components/data-display/MoneyText.jsx"},{"name":"ProgressBar","sourcePath":"components/data-display/ProgressBar.jsx"},{"name":"StatCard","sourcePath":"components/data-display/StatCard.jsx"},{"name":"TransactionItem","sourcePath":"components/data-display/TransactionItem.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"HeroCard","sourcePath":"components/surfaces/HeroCard.jsx"},{"name":"WinCard","sourcePath":"components/surfaces/WinCard.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"f9fff9b1fb9d","components/brand/Logo.jsx":"c0baca3d7c61","components/buttons/Button.jsx":"9bfa21a8335e","components/buttons/FAB.jsx":"a581dba80666","components/data-display/MoneyText.jsx":"f2b8bb419d85","components/data-display/ProgressBar.jsx":"9e41e7c51f51","components/data-display/StatCard.jsx":"09fb755b0ae5","components/data-display/TransactionItem.jsx":"b67278f85275","components/feedback/Badge.jsx":"99a6472ab409","components/feedback/StatusPill.jsx":"ec7d3d091b14","components/forms/Input.jsx":"232aaf76e730","components/forms/SegmentedControl.jsx":"a3c342825ba4","components/navigation/BottomNav.jsx":"045c74fe9254","components/surfaces/Card.jsx":"96f40520b925","components/surfaces/HeroCard.jsx":"efc6a1b31cf4","components/surfaces/WinCard.jsx":"130b62f3f6cc","doc-page.js":"f106e1b77ea0","ui_kits/lens-app/App.jsx":"1e92ff481fe7","ui_kits/lens-app/Insights.jsx":"86af453ab79c","ui_kits/lens-app/Today.jsx":"f482b6a68c65","ui_kits/lens-app/TodayV2.jsx":"7e41375fc65d","ui_kits/lens-app/Transactions.jsx":"05450140497f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LensFinanceDesignSystem_0f4642 = window.LensFinanceDesignSystem_0f4642 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — Material Symbols Rounded wrapper. Lens uses the Material Symbols set
 * (the Flutter app uses Flutter Material icons). Default is the outlined form
 * at 400 weight. Pass fill for the filled variant (e.g. active nav items).
 */
function Icon({
  name,
  size = 24,
  weight = 400,
  fill = false,
  color = "currentColor",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "material-symbols-rounded",
    "aria-hidden": "true",
    style: {
      fontSize: size,
      color,
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
      ...style
    }
  }, rest), name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lens logo. The mark is a circle with a horizontal line through the centre
 * (white ring + Frosted Mint line), ported exactly from the app's LensMark.
 * variant="wordmark" adds the "Lens" wordmark in Outfit beside it.
 * On light surfaces the ring/line switch to Deep Space Blue for contrast.
 */
function Logo({
  variant = "mark",
  size = 48,
  tone = "auto",
  style,
  ...rest
}) {
  // tone: "light" = white mark (for dark/navy bg), "dark" = deep-space mark (for light bg), "auto" = frosted mint accent
  const ring = tone === "dark" ? "var(--lens-deep-space)" : "#FFFFFF";
  const line = tone === "dark" ? "var(--primary)" : "var(--lens-frosted-mint)";
  const mark = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    style: {
      display: "block",
      flex: "none"
    },
    role: "img",
    "aria-label": "Lens"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "36",
    fill: "none",
    stroke: ring,
    strokeWidth: "4.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "24.08",
    y1: "50",
    x2: "75.92",
    y2: "50",
    stroke: line,
    strokeWidth: "6.5",
    strokeLinecap: "round"
  }));
  if (variant === "mark") return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      ...style
    }
  }, rest), mark);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.28,
      ...style
    }
  }, rest), mark, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: size * 0.82,
      letterSpacing: "-0.01em",
      color: tone === "dark" ? "var(--lens-deep-space)" : "#FFFFFF",
      lineHeight: 1
    }
  }, "Lens"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lens Button.
 * Primary is always Deep Space Blue (#1D3557) in both modes — never theme-reactive.
 * Secondary/tertiary use the primary blue. Destructive uses accent red.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  leadingIcon,
  trailingIcon,
  disabled = false,
  full = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const pad = size === "sm" ? "8px 16px" : "14px 24px";
  const fontSize = size === "sm" ? "11px" : "12px";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-sm)",
    fontFamily: "var(--font-ui)",
    fontSize,
    fontWeight: 600,
    lineHeight: 1,
    padding: pad,
    borderRadius: "var(--radius-button)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    width: full ? "100%" : "auto",
    transition: "transform var(--motion-duration) var(--motion-ease), background var(--motion-duration) var(--motion-ease), opacity var(--motion-duration) var(--motion-ease)",
    transform: pressed && !disabled ? "scale(0.98)" : "scale(1)",
    WebkitFontSmoothing: "antialiased",
    userSelect: "none"
  };
  const variants = {
    primary: {
      background: "var(--fab-bg)",
      color: "var(--text-on-brand)",
      filter: hover && !disabled ? "brightness(1.12)" : "none"
    },
    destructive: {
      background: "var(--accent)",
      color: "#FFFFFF",
      filter: hover && !disabled ? "brightness(1.08)" : "none"
    },
    secondary: {
      background: "transparent",
      color: "var(--primary)",
      border: "1px solid var(--primary)",
      opacity: disabled ? 0.4 : hover ? 0.72 : 1
    },
    tertiary: {
      background: hover && !disabled ? "color-mix(in srgb, var(--primary) 10%, transparent)" : "transparent",
      color: "var(--primary)",
      padding: size === "sm" ? "8px 10px" : "12px 14px"
    }
  };
  const iconStyle = {
    fontSize: size === "sm" ? "16px" : "18px",
    fontVariationSettings: "'wght' 600"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: iconStyle
  }, leadingIcon), children, trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: iconStyle
  }, trailingIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/FAB.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Floating Action Button. Always Deep Space Blue (#1D3557), both modes — the
 * visual link to the primary metric (the hero card). Never change its colour.
 * The app uses a rounded-square FAB; set shape="circle" for the classic round form.
 */
function FAB({
  icon = "add",
  shape = "rounded",
  size = 56,
  onClick,
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": "Add",
    onClick: onClick,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--fab-bg)",
      color: "var(--fab-fg)",
      border: "none",
      borderRadius: shape === "circle" ? "50%" : "18px",
      boxShadow: "0 6px 18px rgba(29,53,87,0.32)",
      cursor: "pointer",
      transition: "transform var(--motion-duration) var(--motion-ease)",
      transform: pressed ? "scale(0.94)" : "scale(1)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: size * 0.5,
      fontVariationSettings: "'wght' 500"
    }
  }, icon));
}
Object.assign(__ds_scope, { FAB });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/FAB.jsx", error: String((e && e.message) || e) }); }

// components/data-display/MoneyText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MoneyText — every monetary amount in Lens renders in JetBrains Mono, never
 * Outfit. Colour is neutral by default; it turns green only for income and red
 * only for over-budget/negative signals (the financial-meaning rule).
 */
function MoneyText({
  amount,
  currency = "£",
  size = "md",
  tone = "auto",
  signed = false,
  style,
  ...rest
}) {
  const isYen = currency === "¥" || currency === "JPY";
  const abs = Math.abs(amount);
  const formatted = isYen ? Math.round(abs).toLocaleString("en-US") : abs.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  let sign = "";
  if (amount < 0) sign = "-";else if (signed && amount > 0) sign = "+";
  const sizes = {
    hero: {
      fontSize: "var(--mono-hero-size)",
      fontWeight: 700,
      letterSpacing: "var(--mono-hero-tracking)"
    },
    lg: {
      fontSize: "var(--mono-lg-size)",
      fontWeight: 700,
      letterSpacing: "var(--mono-lg-tracking)"
    },
    md: {
      fontSize: "var(--mono-md-size)",
      fontWeight: 700,
      letterSpacing: "var(--mono-md-tracking)"
    },
    sm: {
      fontSize: "var(--mono-sm-size)",
      fontWeight: 600,
      letterSpacing: "var(--mono-sm-tracking)"
    }
  };
  const tones = {
    auto: "var(--text-primary)",
    secondary: "var(--text-secondary)",
    income: "var(--success)",
    negative: "var(--accent)",
    behind: "var(--warning)",
    hero: "var(--hero-text)",
    inherit: "inherit"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-mono)",
      color: tones[tone],
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      ...sizes[size],
      ...style
    }
  }, rest), sign, currency, formatted);
}
Object.assign(__ds_scope, { MoneyText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/MoneyText.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressBar — linear fill for goals and budgets. 6px radius track. Fill uses
 * primary blue by default; goal progress uses success green when on track.
 */
function ProgressBar({
  value = 0,
  tone = "primary",
  height = 8,
  track,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const fill = {
    primary: "var(--primary)",
    success: "var(--success)",
    accent: "var(--accent)",
    warning: "var(--warning)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: {
      width: "100%",
      height,
      background: track || "var(--border)",
      borderRadius: "var(--radius-progress)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: fill,
      borderRadius: "var(--radius-progress)",
      transition: "width var(--motion-countup-duration) var(--motion-countup-ease)"
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — a compact labelled figure (Income, Expenses, Saved …). Eyebrow
 * label in muted caps, value in JetBrains Mono. Deltas are always muted text,
 * never coloured (per the financial-meaning rule).
 */
function StatCard({
  label,
  amount,
  currency = "£",
  tone = "auto",
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--card)",
      border: "var(--border-solid) solid var(--border)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-card)",
      padding: "var(--space-lg)",
      flex: 1,
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "10px",
      fontWeight: 600,
      letterSpacing: "var(--eyebrow-tracking)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: "16px",
      color: "var(--text-muted)"
    }
  }, icon)), /*#__PURE__*/React.createElement(__ds_scope.MoneyText, {
    amount: amount,
    currency: currency,
    size: "md",
    tone: tone
  }));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/TransactionItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TransactionItem — a single row in a transaction list. Icon dot + name +
 * category on the left; amount + date on the right. Normal expense amounts are
 * secondary text (never red); income is green; over-budget is red.
 */
function TransactionItem({
  icon = "shopping_bag",
  name,
  category,
  amount,
  currency = "£",
  kind = "expense",
  // expense | income
  date,
  onClick,
  style,
  ...rest
}) {
  const tone = kind === "income" ? "income" : "secondary";
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)",
      padding: "var(--space-md) 0",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      width: "38px",
      height: "38px",
      borderRadius: "var(--radius-small)",
      background: "var(--card-raised)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: "20px",
      color: "var(--text-secondary)"
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "14px",
      fontWeight: 500,
      color: "var(--text-primary)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name), category && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "12px",
      color: "var(--text-secondary)"
    }
  }, category)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MoneyText, {
    amount: amount,
    currency: currency,
    size: "sm",
    tone: tone,
    signed: kind === "income"
  }), date && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "10px",
      fontWeight: 500,
      color: "var(--text-muted)",
      marginTop: "2px"
    }
  }, date)));
}
Object.assign(__ds_scope, { TransactionItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/TransactionItem.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small label. `count` (pale-blue pill like "3 starters"), `premium`
 * (violet "Pro"), `outline` (bordered eyebrow like "UK CALENDAR"), `solid`.
 */
function Badge({
  children,
  variant = "count",
  tone = "primary",
  icon,
  style,
  ...rest
}) {
  const toneColor = {
    primary: "var(--primary)",
    premium: "var(--premium)",
    success: "var(--success)",
    warning: "var(--warning)",
    accent: "var(--accent)",
    neutral: "var(--text-secondary)"
  }[tone];
  const variants = {
    count: {
      background: "color-mix(in srgb, var(--primary) 12%, transparent)",
      color: "var(--primary)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "3px 10px",
      fontSize: "11px",
      fontWeight: 600
    },
    premium: {
      background: "color-mix(in srgb, var(--premium) 14%, transparent)",
      color: "var(--premium)",
      border: "none",
      borderRadius: "var(--radius-small)",
      padding: "3px 8px",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    },
    outline: {
      background: "transparent",
      color: toneColor,
      border: `1px solid ${toneColor}`,
      borderRadius: "var(--radius-pill)",
      padding: "3px 10px",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    },
    solid: {
      background: toneColor,
      color: "#FFFFFF",
      border: "none",
      borderRadius: "var(--radius-small)",
      padding: "3px 8px",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      fontFamily: "var(--font-ui)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...variants,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: "13px"
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusPill — a small dot + label chip for on-track / behind / over states
 * (goals, pace, budget). Tinted surface variant by default.
 */
function StatusPill({
  label,
  tone = "success",
  dot = true,
  style,
  ...rest
}) {
  const tones = {
    success: {
      fg: "var(--success)",
      bg: "rgba(22,101,52,0.10)"
    },
    warning: {
      fg: "var(--warning)",
      bg: "rgba(180,83,9,0.12)"
    },
    accent: {
      fg: "var(--accent)",
      bg: "rgba(230,57,70,0.10)"
    },
    primary: {
      fg: "var(--primary)",
      bg: "color-mix(in srgb, var(--primary) 12%, transparent)"
    },
    neutral: {
      fg: "var(--text-secondary)",
      bg: "var(--card-raised)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      background: tones.bg,
      color: tones.fg,
      fontFamily: "var(--font-ui)",
      fontSize: "11px",
      fontWeight: 600,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: tones.fg
    }
  }), label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field. 10px radius, hairline border, 2px primary border on
 * focus. Optional label above and leading icon.
 */
function Input({
  label,
  placeholder,
  value,
  onChange,
  leadingIcon,
  type = "text",
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: "6px",
      fontFamily: "var(--font-ui)",
      fontSize: "12px",
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      background: "var(--card)",
      border: `${focus ? "2px" : "1px"} solid ${focus ? "var(--focus-ring)" : "var(--border)"}`,
      borderRadius: "var(--radius-small)",
      padding: focus ? "13px 15px" : "14px 16px",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--motion-duration) var(--motion-ease)"
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: "18px",
      color: "var(--text-muted)"
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-ui)",
      fontSize: "14px",
      fontWeight: 400,
      color: "var(--text-primary)",
      minWidth: 0
    }
  }, rest))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SegmentedControl — the tabbed switcher (e.g. Timeline / All Items / Grouped).
 * Selected segment is filled Deep Space Blue with white text.
 */
function SegmentedControl({
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(options[0]?.value ?? options[0]);
  const current = value ?? internal;
  const select = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "4px",
      padding: "4px",
      background: "var(--card)",
      border: "var(--border-solid) solid var(--border)",
      borderRadius: "var(--radius-button)",
      ...style
    }
  }, rest), options.map(opt => {
    const o = typeof opt === "string" ? {
      value: opt,
      label: opt
    } : opt;
    const active = o.value === current;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      onClick: () => select(o.value),
      style: {
        flex: 1,
        border: "none",
        cursor: "pointer",
        padding: "9px 12px",
        borderRadius: "10px",
        background: active ? "var(--lens-deep-space)" : "transparent",
        color: active ? "#FFFFFF" : "var(--text-secondary)",
        fontFamily: "var(--font-ui)",
        fontSize: "13px",
        fontWeight: 600,
        transition: "background var(--motion-duration) var(--motion-ease), color var(--motion-duration) var(--motion-ease)"
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_ITEMS = [{
  key: "today",
  label: "Today",
  icon: "calendar_month"
}, {
  key: "transactions",
  label: "Transactions",
  icon: "receipt_long"
}, {
  key: "insights",
  label: "Insights",
  icon: "lightbulb"
}, {
  key: "more",
  label: "More",
  icon: "more_horiz"
}];

/**
 * BottomNav — the app's tab bar. Active item uses primary colour icon + label;
 * inactive uses neutral. A centred Deep Space FAB sits between the middle tabs
 * (hidden on the More tab). Elevation 0, no shadow.
 */
function BottomNav({
  items = DEFAULT_ITEMS,
  active = "today",
  onSelect,
  onAdd,
  showFab = true,
  style,
  ...rest
}) {
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);
  const fabVisible = showFab && active !== "more";
  const Tab = ({
    it
  }) => {
    const on = it.key === active;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onSelect && onSelect(it.key),
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3px",
        padding: "6px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-rounded",
      style: {
        fontSize: "24px",
        color: on ? "var(--primary)" : "var(--neutral)",
        fontVariationSettings: `'FILL' ${on ? 1 : 0}, 'wght' ${on ? 500 : 400}`
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: "10px",
        fontWeight: on ? 600 : 500,
        color: on ? "var(--primary)" : "var(--neutral)"
      }
    }, it.label));
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      background: "var(--nav-bg)",
      borderTop: "var(--border-solid) solid var(--border)",
      padding: "6px var(--space-sm) 10px",
      position: "relative",
      ...style
    }
  }, rest), left.map(it => /*#__PURE__*/React.createElement(Tab, {
    key: it.key,
    it: it
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "64px",
      display: "flex",
      justifyContent: "center",
      flex: "none"
    }
  }, fabVisible && /*#__PURE__*/React.createElement(__ds_scope.FAB, {
    size: 52,
    onClick: onAdd,
    style: {
      marginTop: "-2px"
    }
  })), right.map(it => /*#__PURE__*/React.createElement(Tab, {
    key: it.key,
    it: it
  })));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the primary content container. One elevation level only: flat with a
 * hairline border. Subtle shadow in light mode, no shadow in dark mode.
 */
function Card({
  children,
  padding = "lg",
  interactive = false,
  onClick,
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const pads = {
    none: 0,
    sm: "var(--space-sm)",
    md: "var(--space-md)",
    lg: "var(--space-lg)",
    xl: "var(--space-xl)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseDown: () => interactive && setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      background: "var(--card)",
      border: "var(--border-solid) solid var(--border)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-card)",
      padding: pads[padding],
      cursor: interactive ? "pointer" : "default",
      transition: "transform 100ms var(--motion-ease)",
      transform: pressed ? "scale(0.98)" : "scale(1)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/HeroCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * HeroCard — the single most important element in Lens. The "safe to spend
 * today" number. Always the Deep Space gradient, both modes; never adapts.
 * All text is white / dimmed white. The amount colour signals state:
 * white on-track, amber behind pace, red over budget.
 */
function HeroCard({
  label = "Safe to spend today",
  amount,
  currency = "£",
  state = "ontrack",
  // ontrack | behind | over
  statusLabel,
  meta,
  // right-aligned secondary line, e.g. "26d to payday"
  estimate = false,
  style,
  ...rest
}) {
  const dotColor = {
    ontrack: "var(--hero-dot-ok)",
    behind: "var(--hero-behind)",
    over: "var(--hero-negative)"
  }[state];
  const amountTone = {
    ontrack: "hero",
    behind: "behind",
    over: "negative"
  }[state];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--hero-top)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-xl)",
      color: "var(--hero-text)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      marginBottom: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "var(--eyebrow-tracking)",
      textTransform: "uppercase",
      color: "var(--hero-subtext)"
    }
  }, label), estimate && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "9px",
      fontWeight: 700,
      letterSpacing: "0.06em",
      color: "var(--hero-lock)",
      background: "rgba(234,179,8,0.16)",
      padding: "2px 6px",
      borderRadius: "var(--radius-small)",
      textTransform: "uppercase"
    }
  }, "EST"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: "16px",
      color: "var(--hero-subtext)",
      marginLeft: "auto"
    }
  }, "info")), /*#__PURE__*/React.createElement(__ds_scope.MoneyText, {
    amount: amount,
    currency: currency,
    size: "hero",
    tone: amountTone
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "1px",
      background: "var(--hero-track)",
      margin: "var(--space-lg) 0 var(--space-md)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: dotColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "13px",
      fontWeight: 500,
      color: "var(--hero-text)"
    }
  }, statusLabel)), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "13px",
      color: "var(--hero-subtext)"
    }
  }, meta)));
}
Object.assign(__ds_scope, { HeroCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/HeroCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/WinCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WinCard — a warm, encouraging nudge (streaks, first-win prompts, tips).
 * Distinct from a plain Card: it carries the Frosted Mint border and an
 * optional tinted icon tile. Copy stays supportive, never a guilt machine.
 */
function WinCard({
  icon = "local_fire_department",
  tint = "amber",
  headline,
  body,
  dots,
  style,
  ...rest
}) {
  const tints = {
    amber: {
      bg: "rgba(251,191,36,0.16)",
      fg: "#B45309"
    },
    blue: {
      bg: "color-mix(in srgb, var(--primary) 14%, transparent)",
      fg: "var(--primary)"
    },
    green: {
      bg: "rgba(22,101,52,0.12)",
      fg: "var(--success)"
    }
  }[tint];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--card)",
      border: "1px solid var(--lens-frosted-mint)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-lg)",
      display: "flex",
      gap: "var(--space-md)",
      alignItems: "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-small)",
      background: tints.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: "24px",
      color: tints.fg,
      fontVariationSettings: "'FILL' 1"
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "15px",
      fontWeight: 700,
      color: "var(--text-primary)",
      marginBottom: "4px"
    }
  }, headline), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "13px",
      fontWeight: 400,
      color: "var(--text-secondary)",
      lineHeight: 1.45
    }
  }, body), dots && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      marginTop: "var(--space-md)"
    }
  }, dots.map((filled, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: filled ? "var(--primary)" : "color-mix(in srgb, var(--primary) 20%, transparent)"
    }
  })))));
}
Object.assign(__ds_scope, { WinCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/WinCard.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * On screen the document renders as a single continuous sheet on a desk
 * background (Google Docs' pageless view): you scroll one tall page card.
 * There is no manual page-splitting — write the whole document as normal
 * flow inside <doc-page> and the browser's print engine paginates it at
 * export.
 *
 * At print the component injects `@page { size: …; margin: 0 }` (which
 * leaves Chrome no margin box to draw its date/URL/page-count header in)
 * and moves the visual margin onto the sheet's own padding, so the printed
 * page has the same inset you see on screen. Standard break-hygiene rules
 * (`break-inside: avoid` on figures, code blocks, images and table rows;
 * `orphans/widows: 3`) are applied so paragraphs and groups split cleanly.
 * On screen and at print, headings default to `text-wrap: balance` and
 * body text (p, li, blockquote, figcaption) to `text-wrap: pretty`, so
 * the document avoids widowed/orphaned words; the defaults have zero
 * specificity, so any text-wrap you declare on those elements wins.
 * The component also marks the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page size="letter" margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 *
 * Attributes:
 *   size    — letter | a4 | legal (default letter)
 *   orientation — portrait (default) | landscape. For documents built to
 *           export, always set it explicitly. landscape swaps the named
 *           size's dimensions (letter landscape prints 11in × 8.5in).
 *   width / height — explicit CSS lengths, override `size` and
 *           `orientation`: the page IS the design's size (a poster
 *           printed at its true dimensions). With both set, the component
 *           also declares the page box as the preview size (a
 *           `meta[name="omelette-fixed-size"]` it injects at runtime,
 *           never overriding one you author), so the in-app preview
 *           scales the whole sheet into view.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the named
 *           paper: content lays out at exactly this size, and the
 *           component scales it to fit the printable area (centered
 *           horizontally, top-aligned), so e.g. a 960px-wide poster lands
 *           on one Letter page. Both must be set; they do not change the
 *           page box — `size`/`orientation` (or `width`/`height`)
 *           still name the paper. For pages WITHOUT running
 *           header/footer slots — the fit box fills the printable area
 *           and does not subtract slot heights.
 *   margin  — printable inset on every page (default 0.75in); margin="0"
 *           makes pages full-bleed (content then owns its own insets)
 *
 * Running header/footer (optional): give an element `slot="header"` or
 * `slot="footer"` and it repeats on every printed page via
 * `position: fixed`. To keep body text from sliding under it, the
 * component prints inside a single-cell table whose <thead>/<tfoot> are
 * spacers sized to the header/footer height — browsers repeat thead/tfoot
 * on every page, so each sheet's content starts below the header and ends
 * above the footer. On screen the header/footer render once at the
 * top/bottom of the sheet.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks: `break-before: page` on an element that must start
 *   a new page (a chapter, an appendix). Add your own kept-together
 *   blocks (callouts, stat tiles, cards) to a `break-inside: avoid`
 *   rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #ece8dd;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 14px rgba(20, 20, 19, 0.12);
      border-radius: 2px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
      } else if (typeof survivor._syncFixedSizeMeta === 'function') {
        // A departed true-size owner hands the page-global preview meta
        // to whatever true-size page remains (or it's removed).
        survivor._syncFixedSizeMeta();
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      this._vars.textContent = ':host{' + fitVars + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      tag.textContent = '@page { size: ' + this.pageWidth + ' ' + this.pageHeight + '; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/lens-app/App.jsx
try { (() => {
// Lens app shell — welcome, tab routing, add-transaction sheet, phone frame.
// Bundle components destructured lazily inside each function (this file is
// also compiled into _ds_bundle.js). No top-level side effects: the page
// (index.html) mounts window.LensApp itself.

function Welcome({
  onStart
}) {
  const {
    Logo,
    Button
  } = window.LensFinanceDesignSystem_0f4642;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "#1D3557",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 320,
      height: 320,
      borderRadius: "50%",
      background: "rgba(124,58,237,.35)",
      filter: "blur(60px)",
      right: -80,
      bottom: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 300,
      height: 300,
      borderRadius: "50%",
      background: "rgba(168,218,220,.28)",
      filter: "blur(70px)",
      left: -70,
      bottom: -40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    tone: "light",
    size: 60
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 24,
      fontWeight: 700,
      color: "#fff",
      marginBottom: 10
    }
  }, "Your data stays on your phone"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      color: "rgba(255,255,255,.72)",
      lineHeight: 1.5
    }
  }, "On-device by default. No account needed to start.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    style: {
      background: "#fff",
      color: "#1D3557",
      marginTop: 8,
      padding: "15px 28px"
    },
    onClick: onStart
  }, "Get started")));
}
function More() {
  const {
    Card
  } = window.LensFinanceDesignSystem_0f4642;
  const rows = [{
    icon: "workspace_premium",
    label: "Upgrade to Pro",
    note: "£4.99/mo",
    tone: "premium"
  }, {
    icon: "flag",
    label: "Goals"
  }, {
    icon: "autorenew",
    label: "Recurring"
  }, {
    icon: "summarize",
    label: "Monthly report"
  }, {
    icon: "language",
    label: "Language",
    note: "English (UK)"
  }, {
    icon: "lock",
    label: "Privacy & security"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 28,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, "More"), /*#__PURE__*/React.createElement(Card, {
    padding: "none"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 16px",
      borderTop: i ? "1px solid var(--border)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 22,
      color: r.tone === "premium" ? "var(--premium)" : "var(--text-secondary)"
    }
  }, r.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      fontWeight: 500,
      color: r.tone === "premium" ? "var(--premium)" : "var(--text-primary)"
    }
  }, r.label), r.note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, r.note), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 20,
      color: "var(--text-muted)"
    }
  }, "chevron_right")))));
}
function AddSheet({
  open,
  onClose
}) {
  const {
    Input,
    Button
  } = window.LensFinanceDesignSystem_0f4642;
  const [cat, setCat] = React.useState("Groceries");
  const cats = ["Groceries", "Eating out", "Transport", "Bills", "Fun"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: open ? "auto" : "none",
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,.35)",
      opacity: open ? 1 : 0,
      transition: "opacity .25s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "var(--card)",
      borderRadius: "20px 20px 0 0",
      padding: "20px 20px 28px",
      transform: open ? "translateY(0)" : "translateY(105%)",
      transition: "transform .3s cubic-bezier(.215,.61,.355,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      borderRadius: 2,
      background: "var(--border)",
      margin: "0 auto 18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 18,
      fontWeight: 600,
      color: "var(--text-primary)",
      marginBottom: 16
    }
  }, "Add transaction"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Amount",
    placeholder: "0.00",
    leadingIcon: "currency_exchange"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Merchant",
    placeholder: "e.g. Tesco",
    leadingIcon: "storefront"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 500,
      color: "var(--text-secondary)",
      marginBottom: 8
    }
  }, "Category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      border: "1px solid " + (c === cat ? "var(--primary)" : "var(--border)"),
      background: c === cat ? "color-mix(in srgb, var(--primary) 10%, transparent)" : "var(--card)",
      color: c === cat ? "var(--primary)" : "var(--text-secondary)",
      borderRadius: 999,
      padding: "7px 14px",
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer"
    }
  }, c)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    onClick: onClose,
    style: {
      marginTop: 6
    }
  }, "Save transaction"))));
}
function App() {
  const {
    BottomNav
  } = window.LensFinanceDesignSystem_0f4642;
  const [started, setStarted] = React.useState(false);
  const [tab, setTab] = React.useState("today");
  const [add, setAdd] = React.useState(false);
  const screens = {
    today: window.Today,
    transactions: window.Transactions,
    insights: window.Insights,
    more: More
  };
  const Screen = screens[tab] || window.Today;
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "status"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 15
    }
  }, "signal_cellular_alt"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 15
    }
  }, "wifi"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 17
    }
  }, "battery_full"))), !started ? /*#__PURE__*/React.createElement(Welcome, {
    onStart: () => setStarted(true)
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement(Screen, null)), /*#__PURE__*/React.createElement(BottomNav, {
    active: tab,
    onSelect: setTab,
    onAdd: () => setAdd(true)
  }), /*#__PURE__*/React.createElement(AddSheet, {
    open: add,
    onClose: () => setAdd(false)
  })));
}
window.LensApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lens-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lens-app/Insights.jsx
try { (() => {
// Insights — runway hero, weekly sparkline, insight rows.
// Bundle components destructured lazily (see note in Today.jsx).

function Sparkline() {
  const pts = [8, 20, 20, 20, 6, 44, 22, 22, 26];
  const w = 300,
    h = 60,
    max = 48;
  const step = w / (pts.length - 1);
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - p / max * h}`).join(" ");
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h + 14}`,
    width: "100%",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: "var(--primary)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: (pts.length - 1) * step,
    cy: h - pts[pts.length - 1] / max * h,
    r: "4",
    fill: "var(--primary)"
  }));
}
function Insights() {
  const {
    Card,
    Badge,
    MoneyText
  } = window.LensFinanceDesignSystem_0f4642;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 28,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, "Insights"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, "Discoveries about your money")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--hero-top)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "5px 12px",
      borderRadius: 999,
      border: "1px solid rgba(234,179,8,.5)",
      color: "var(--hero-lock)",
      fontSize: 12,
      fontWeight: 600,
      fontFamily: "var(--font-ui)"
    }
  }, "Your estimate"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--hero-subtext)"
    }
  }, "Financial runway")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 56,
      fontWeight: 700,
      letterSpacing: "-2px",
      color: "#fff"
    }
  }, "4.9"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 20,
      color: "var(--hero-subtext)"
    }
  }, "months")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--hero-track)",
      margin: "16px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      color: "var(--hero-subtext)",
      lineHeight: 1.5
    }
  }, "An early read. It only gets more accurate from here.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Financial Runway"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, "4.9 months \u2304"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "This week"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "avg \xA360/day")), /*#__PURE__*/React.createElement(Sparkline, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 10,
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)",
      marginTop: 4
    }
  }, ["T", "W", "T", "F", "S", "S", "M"].map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, d)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--text-primary)",
      margin: "0 0 8px 2px"
    }
  }, "Insights"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 20,
      color: "var(--primary)"
    }
  }, "subscriptions"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "1 subscription, \xA312.99/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "\xA3155.88/yr across 1 item. Top: Netflix."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--primary)"
    }
  }, "Review all \u2192"))));
}
window.Insights = Insights;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lens-app/Insights.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lens-app/Today.jsx
try { (() => {
// Today dashboard — the app's home. Composes HeroCard, WinCard, Card, Badge, MoneyText.
// NOTE: bundle components are destructured inside the functions (lazily) —
// this file is also compiled into _ds_bundle.js, where a top-level destructure
// would run before the namespace exists.

function GoalRing({
  pct
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 74,
      height: 74,
      borderRadius: "50%",
      flex: "none",
      background: `conic-gradient(var(--success) ${pct * 3.6}deg, var(--border) 0deg)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--card)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, pct, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontWeight: 600,
      letterSpacing: ".06em",
      color: "var(--text-muted)"
    }
  }, "OF GOALS")));
}
function Today() {
  const {
    HeroCard,
    WinCard,
    Card,
    Badge,
    MoneyText,
    StatusPill
  } = window.LensFinanceDesignSystem_0f4642;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "var(--primary)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 15
    }
  }, "M"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 18,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Afternoon, Mika")), /*#__PURE__*/React.createElement(HeroCard, {
    amount: 86.62,
    state: "ontrack",
    statusLabel: "\xA3397.17 ahead pace",
    meta: "26d to payday",
    estimate: true
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Starters, based on what we know"), /*#__PURE__*/React.createElement(Badge, {
    variant: "count"
  }, "3 starters")), [{
    t: "At your declared spend, your balance lasts until mid-November 2026.",
    b: null
  }, {
    t: "Cutting your declared spend by 10% adds 0.7 months to your Runway.",
    b: null
  }, {
    t: "The new UK tax year just started. You've got £20,000 of ISA allowance to use before 5 April 2027.",
    b: "UK Calendar"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: i ? "1px solid var(--border)" : "none",
      padding: "12px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--primary)",
      marginTop: 6,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      color: "var(--text-primary)",
      lineHeight: 1.45
    }
  }, s.t), s.b && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    tone: "warning"
  }, s.b))))))), /*#__PURE__*/React.createElement(WinCard, {
    icon: "local_fire_department",
    tint: "amber",
    headline: "Your first streak is on its way",
    body: "Stay within today's pace 3 days in a row and you'll start collecting streaks."
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(GoalRing, {
    pct: 46
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text-primary)",
      marginBottom: 8
    }
  }, "1 active goal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: ".06em",
      color: "var(--text-muted)"
    }
  }, "SAVED"), /*#__PURE__*/React.createElement(MoneyText, {
    amount: 2300,
    size: "sm",
    tone: "income"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: ".06em",
      color: "var(--text-muted)"
    }
  }, "TARGET"), /*#__PURE__*/React.createElement(MoneyText, {
    amount: 5000,
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    label: "1 on track",
    tone: "success"
  }))))));
}
window.Today = Today;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lens-app/Today.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lens-app/TodayV2.jsx
try { (() => {
// Today V2 — redesign grounded in the real widget inventory (this_week_card,
// upcoming_widget, goals_snapshot, recent_transactions) and the shipped hero
// (slider + dot thumb, payday pill, green on-track pill).
// Bundle components destructured lazily (see note in Today.jsx).

function Eyebrow({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      margin: "4px 2px 8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, children), action && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--primary)",
      cursor: "pointer"
    }
  }, action));
}
function V2Card({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-card)",
      padding: "var(--space-lg)",
      ...style
    }
  }, children);
}
function HeroV2() {
  const {
    MoneyText
  } = window.LensFinanceDesignSystem_0f4642;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--hero-top)",
      borderRadius: "var(--radius-card)",
      padding: "22px",
      color: "var(--hero-text)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--hero-subtext)"
    }
  }, "Safe to spend today"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 15,
      color: "var(--hero-subtext)"
    }
  }, "info"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--hero-text)",
      background: "var(--hero-pill-bg)",
      padding: "5px 12px",
      borderRadius: 999
    }
  }, "\xB7 6d to payday")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "14px 0 22px"
    }
  }, /*#__PURE__*/React.createElement(MoneyText, {
    amount: 179.22,
    size: "hero",
    tone: "hero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 14,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 4,
      borderRadius: 2,
      background: "var(--hero-track)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      width: "58%",
      height: 4,
      borderRadius: 2,
      background: "var(--hero-fill)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "58%",
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: "#fff",
      transform: "translateX(-7px)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 8,
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "var(--hero-subtext)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "1 Jul"), /*#__PURE__*/React.createElement("span", null, "31 Jul")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--hero-track)",
      margin: "16px 0 14px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--hero-positive)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      fontWeight: 500
    }
  }, "\u2248 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600
    }
  }, "\xA31,456.91"), " ahead pace")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--hero-positive)",
      background: "rgba(74,222,128,.14)",
      padding: "7px 14px",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 15,
      fontVariationSettings: "'wght' 600"
    }
  }, "north_east"), "on track")));
}
function WeekCard() {
  const {
    StatusPill
  } = window.LensFinanceDesignSystem_0f4642;
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return /*#__PURE__*/React.createElement(V2Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "2 of 7 days inside pace"), /*#__PURE__*/React.createElement(StatusPill, {
    label: "On track",
    tone: "success"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 500,
      color: "var(--text-muted)"
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: i < 2 ? "var(--primary)" : "transparent",
      border: i < 2 ? "none" : "1.5px solid var(--border)"
    }
  }, i < 2 && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 16,
      color: "#fff",
      fontVariationSettings: "'wght' 600"
    }
  }, "check"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card-raised)",
      borderRadius: "var(--radius-small)",
      padding: "10px 12px",
      fontFamily: "var(--font-ui)",
      fontSize: 12.5,
      color: "var(--text-secondary)",
      lineHeight: 1.45
    }
  }, "\xA342.50 of headroom so far this week, all routed to Emergency fund."));
}
function TodayV2() {
  const {
    MoneyText,
    TransactionItem,
    ProgressBar
  } = window.LensFinanceDesignSystem_0f4642;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Tuesday \xB7 8 Jul"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 22,
      fontWeight: 700,
      color: "var(--text-primary)",
      marginTop: 2
    }
  }, "Afternoon, Mika")), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 24,
      color: "var(--text-secondary)",
      paddingBottom: 4
    }
  }, "settings")), /*#__PURE__*/React.createElement(HeroV2, null), /*#__PURE__*/React.createElement(WeekCard, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Up next"), /*#__PURE__*/React.createElement(V2Card, {
    style: {
      padding: "2px var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(TransactionItem, {
    icon: "home",
    name: "Mortgage",
    category: "Housing \xB7 Monthly",
    amount: 1085.00,
    date: "due 1 Aug"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border)"
    }
  }), /*#__PURE__*/React.createElement(TransactionItem, {
    icon: "subscriptions",
    name: "Netflix",
    category: "Streaming \xB7 Monthly",
    amount: 12.99,
    date: "due 3 Aug"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    action: "Manage \u2192"
  }, "Goals"), /*#__PURE__*/React.createElement(V2Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Emergency fund"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "4 May 2027")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 46,
    tone: "success",
    height: 6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(MoneyText, {
    amount: 2300,
    size: "sm",
    tone: "income"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "of"), /*#__PURE__*/React.createElement(MoneyText, {
    amount: 5000,
    size: "sm",
    tone: "secondary"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-secondary)"
    }
  }, "46%")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    action: "See all \u2192"
  }, "Recent"), /*#__PURE__*/React.createElement(V2Card, {
    style: {
      padding: "2px var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(TransactionItem, {
    icon: "shopping_cart",
    name: "Tesco",
    category: "Groceries",
    amount: 42.80,
    date: "Today"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border)"
    }
  }), /*#__PURE__*/React.createElement(TransactionItem, {
    icon: "local_cafe",
    name: "Blue Bottle",
    category: "Coffee",
    amount: 4.20,
    date: "Today"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border)"
    }
  }), /*#__PURE__*/React.createElement(TransactionItem, {
    icon: "payments",
    name: "Salary",
    category: "Income",
    amount: 2800,
    kind: "income",
    date: "1 Jul"
  }))));
}
window.TodayV2 = TodayV2;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lens-app/TodayV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lens-app/Transactions.jsx
try { (() => {
// Transactions list — grouped rows with a monthly total header.
// Bundle components destructured lazily (see note in Today.jsx).

function Transactions() {
  const {
    Card,
    TransactionItem,
    SegmentedControl,
    MoneyText
  } = window.LensFinanceDesignSystem_0f4642;
  const [tab, setTab] = React.useState("All");
  const groups = [{
    day: "Today · 12 Apr",
    items: [{
      icon: "shopping_cart",
      name: "Tesco",
      cat: "Groceries",
      amt: 42.80
    }, {
      icon: "local_cafe",
      name: "Blue Bottle",
      cat: "Coffee",
      amt: 4.20
    }]
  }, {
    day: "Yesterday · 11 Apr",
    items: [{
      icon: "payments",
      name: "Salary",
      cat: "Income",
      amt: 2800,
      kind: "income"
    }, {
      icon: "subscriptions",
      name: "Netflix",
      cat: "Streaming",
      amt: 12.99
    }, {
      icon: "directions_bus",
      name: "TfL",
      cat: "Transport",
      amt: 6.60
    }]
  }, {
    day: "9 Apr",
    items: [{
      icon: "restaurant",
      name: "Franco Manca",
      cat: "Eating out",
      amt: 31.50
    }, {
      icon: "bolt",
      name: "Octopus Energy",
      cat: "Bills",
      amt: 88.00
    }]
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 28,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, "Transactions")), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      background: "var(--hero-top)",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 8px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--hero-subtext)"
    }
  }, "Spent this month"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(MoneyText, {
    amount: 1202.99,
    size: "lg",
    tone: "hero"
  })))), /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ["Timeline", "All", "Grouped"],
    value: tab,
    onChange: setTab
  }), groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.day
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "0 0 8px 2px"
    }
  }, g.day), /*#__PURE__*/React.createElement(Card, null, g.items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border)"
    }
  }), /*#__PURE__*/React.createElement(TransactionItem, {
    icon: it.icon,
    name: it.name,
    category: it.cat,
    amount: it.amt,
    kind: it.kind
  })))))));
}
window.Transactions = Transactions;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lens-app/Transactions.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FAB = __ds_scope.FAB;

__ds_ns.MoneyText = __ds_scope.MoneyText;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TransactionItem = __ds_scope.TransactionItem;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.HeroCard = __ds_scope.HeroCard;

__ds_ns.WinCard = __ds_scope.WinCard;

})();
