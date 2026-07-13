/* @ds-bundle: {"format":4,"namespace":"SyfxDesignSystem_5de6e8","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Pill","sourcePath":"components/display/Pill.jsx"},{"name":"SectionLabel","sourcePath":"components/display/SectionLabel.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CodeBlock","sourcePath":"components/surfaces/CodeBlock.jsx"},{"name":"IconCircle","sourcePath":"components/surfaces/IconCircle.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"76e376ead785","components/display/Pill.jsx":"33b9312c05e7","components/display/SectionLabel.jsx":"685f9d907f2d","components/forms/Button.jsx":"92f1669270a5","components/forms/Input.jsx":"c93416cbb463","components/surfaces/Card.jsx":"adf6ec4a7951","components/surfaces/CodeBlock.jsx":"a65898c2f9e4","components/surfaces/IconCircle.jsx":"9b100c8cd52f","ui_kits/platform/app.jsx":"e1411fe577f7","ui_kits/waitlist/waitlist.jsx":"003a3c71a11f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SyfxDesignSystem_5de6e8 = window.SyfxDesignSystem_5de6e8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
/**
 * Syfx Badge — mint pill with optional blinking dot.
 * Used for "⚡ Early Access Now Open — Limited Spots".
 */
function Badge({
  children,
  dot = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.01em',
      color: 'var(--accent-mint)',
      background: 'var(--accent-mint-glow-sm)',
      border: '1px solid var(--border-mint)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--accent-mint)',
      animation: 'syfx-blink 1.6s var(--ease-standard) infinite',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Pill.jsx
try { (() => {
/**
 * Syfx Pill — rounded chip for markets, chains, and benefit lists.
 * variant: 'default' (neutral, mint on hover) | 'infra' (mint-tinted, always on)
 */
function Pill({
  children,
  variant = 'default',
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 18px',
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    fontWeight: 500,
    borderRadius: 'var(--radius-pill)',
    transition: 'border-color 180ms var(--ease-standard), color 180ms var(--ease-standard)',
    cursor: 'default'
  };
  const variants = {
    default: {
      background: 'var(--bg-card)',
      border: `1px solid ${hover ? 'var(--accent-mint)' : 'var(--border)'}`,
      color: hover ? 'var(--accent-mint)' : 'var(--text-secondary)'
    },
    infra: {
      background: 'var(--accent-mint-tint-05)',
      border: '1px solid var(--border-mint)',
      color: 'var(--accent-mint)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...(variants[variant] || variants.default),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Pill.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionLabel.jsx
try { (() => {
/**
 * Syfx SectionLabel — the mint uppercase eyebrow above every section headline.
 */
function SectionLabel({
  children,
  color = 'mint',
  style = {}
}) {
  const colors = {
    mint: 'var(--accent-mint)',
    cyan: 'var(--accent-cyan)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: colors[color] || colors.mint,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Syfx Button — the single most important brand element.
 * Primary = mint fill on dark text. Used for every CTA.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 40,
      padding: '0 18px',
      fontSize: 14
    },
    md: {
      height: 48,
      padding: '0 26px',
      fontSize: 15
    },
    lg: {
      height: 56,
      padding: '0 34px',
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent-mint)',
      color: 'var(--text-on-mint)',
      border: '1px solid var(--accent-mint)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent-mint)',
      border: '1px solid var(--border-mint)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const sz = sizes[size] || sizes.md;
  const vr = variants[variant] || variants.primary;
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    background: 'var(--accent-mint-dim)',
    borderColor: 'var(--accent-mint-dim)'
  } : variant === 'secondary' ? {
    borderColor: 'var(--accent-mint)',
    color: 'var(--accent-mint)'
  } : {
    background: 'var(--accent-mint-tint)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: fullWidth ? '100%' : 'auto',
      height: sz.height,
      padding: sz.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: sz.fontSize,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background 220ms var(--ease-standard), border-color 220ms var(--ease-standard), color 220ms var(--ease-standard)',
      ...vr,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Syfx Input — dark surface field with mint focus border.
 * Used for the email capture in hero + waitlist sections.
 */
function Input({
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  disabled = false,
  error = false,
  size = 'md',
  fullWidth = true,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    md: {
      height: 48,
      fontSize: 15,
      padding: '0 16px'
    },
    lg: {
      height: 56,
      fontSize: 16,
      padding: '0 20px'
    }
  };
  const sz = sizes[size] || sizes.md;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--accent-mint)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: fullWidth ? '100%' : 'auto',
      height: sz.height,
      padding: sz.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: sz.fontSize,
      fontWeight: 400,
      color: 'var(--text-primary)',
      background: 'var(--bg-surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-pill)',
      outline: focus ? '2px solid var(--accent-mint)' : 'none',
      outlineOffset: 2,
      boxShadow: error ? '0 0 0 0' : 'none',
      transition: 'border-color 180ms var(--ease-standard)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Syfx Card — elevated dark surface with mint-on-hover border.
 * The base container for problem cards, feature cards, credibility cards, etc.
 */
function Card({
  children,
  highlight = false,
  hover = true,
  lift = false,
  padding = 28,
  radius = 14,
  style = {},
  ...rest
}) {
  const [isHover, setIsHover] = React.useState(false);
  const borderColor = highlight || hover && isHover ? 'var(--border-mint)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setIsHover(true),
    onMouseLeave: () => setIsHover(false),
    style: {
      background: 'var(--bg-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: radius,
      padding,
      transition: 'border-color 220ms var(--ease-standard), transform 220ms var(--ease-standard), box-shadow 220ms var(--ease-standard)',
      transform: lift && isHover ? 'translateY(-2px)' : 'none',
      boxShadow: lift && isHover ? 'var(--shadow-mint-hover)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CodeBlock.jsx
try { (() => {
/**
 * Syfx CodeBlock — dark mono panel with mint text for ZK rulebooks and
 * technical callouts.
 */
function CodeBlock({
  children,
  lines,
  label,
  style = {}
}) {
  const content = lines ? lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      whiteSpace: 'pre'
    }
  }, l)) : children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-primary)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 20px',
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      lineHeight: 1.75,
      color: 'var(--accent-mint)',
      overflowX: 'auto',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, label), content);
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/IconCircle.jsx
try { (() => {
/**
 * Syfx IconCircle — rounded-square mint-tinted container for emoji / glyph icons.
 * Used for solution points, step icons, and feature icons.
 */
function IconCircle({
  children,
  size = 48,
  radius = 12,
  tone = 'mint',
  style = {}
}) {
  const tones = {
    mint: {
      bg: 'var(--accent-mint-tint)',
      border: 'var(--border-mint)'
    },
    cyan: {
      bg: 'var(--accent-cyan-tint)',
      border: 'rgba(6,182,212,0.3)'
    },
    green: {
      bg: 'var(--accent-green-tint)',
      border: 'rgba(34,197,94,0.3)'
    }
  };
  const t = tones[tone] || tones.mint;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      fontSize: Math.round(size * 0.42),
      lineHeight: 1,
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: radius,
      flexShrink: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/IconCircle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/app.jsx
try { (() => {
/* Syfx Platform — landing hero + multi-view product dashboard (Astral/Ostium/Kuvi-inspired, mint-on-black) */
let Button, Badge;
const {
  useState,
  useRef,
  useEffect,
  useLayoutEffect
} = React;
const MINT = '#00E5A0';
const DOWN = '#FF5C6C';
const MARK = '../../assets/syfx-mark.png';

/* ---------- Lucide-style line icons ---------- */
function Icon({
  d,
  size = 20,
  stroke = 2,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const IHome = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 22V12h6v10"
}));
const ICandle = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M9 4v3M9 16v4"
}), /*#__PURE__*/React.createElement("rect", {
  x: "7",
  y: "7",
  width: "4",
  height: "9",
  rx: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 3v4M17 15v6"
}), /*#__PURE__*/React.createElement("rect", {
  x: "15",
  y: "7",
  width: "4",
  height: "8",
  rx: "1"
}));
const ISentinel = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18M3 12h18"
}));
const IChat = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
}));
const IProof = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9 12 2 2 4-4"
}));
const IMarkets = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 17V9M13 17V5M8 17v-3"
}));
const ISettings = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 7h-9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 17H5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17",
  cy: "17",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7",
  cy: "7",
  r: "3"
}));
const IBell = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M10.27 21a2 2 0 0 0 3.46 0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.41 5.96-2.74 7.33"
}));
const ISearch = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21 21-4.3-4.3"
}));
const ITrend = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M16 7h6v6"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-8.5 8.5-5-5L2 17"
}));
const IWallet = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 1 1-1v-2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"
}));
const IArrow = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
}));
const IArrowLeft = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M19 12H5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 19-7-7 7-7"
}));
const IUp = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m5 12 7-7 7 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 19V5"
}));
const IMenu = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "4",
  x2: "20",
  y1: "6",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4",
  x2: "20",
  y1: "12",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4",
  x2: "20",
  y1: "18",
  y2: "18"
}));
const ICheck = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const IChevron = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
const IGlobe = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"
}));
const ISpark = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2 2M15.7 15.7l2 2M17.7 6.3l-2 2M8.3 15.7l-2 2"
}));
const IPlus = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M5 12h14"
}));
const IMax = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"
}));
const ILock = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "11",
  width: "18",
  height: "11",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 11V7a5 5 0 0 1 10 0v4"
}));
const IBolt = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M13 2 3 14h9l-1 8 10-12h-9z"
}));
const IBrain = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
}));
const IX = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 4l16 16M20 4 4 20"
}));
const IGithub = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
}));
const ISend = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m22 2-7 20-4-9-9-4Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 2 11 13"
}));
const IDiscord = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "12",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15",
  cy: "12",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 7.2A16 16 0 0 1 12 6.5a16 16 0 0 1 4.5.7c1.5 3 2 6 1.7 9.3a13 13 0 0 1-4 2 9 9 0 0 1-.8-1.3M9.6 17.2a13 13 0 0 1-4-2c-.3-3.3.2-6.3 1.7-9.3"
}));
const ILinkedIn = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "9",
  width: "4",
  height: "12"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "4",
  r: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 9h3.5v1.7A3.8 3.8 0 0 1 17 9c2.8 0 4 1.9 4 4.8V21h-4v-6.4c0-1.4-.5-2.3-1.7-2.3-1 0-1.6.7-1.8 1.4-.1.2-.1.6-.1.9V21h-4s.05-11.3 0-12z"
}));

/* ===================== CANDLE CHART ===================== */
function mulberry32(a) {
  return function () {
    a |= 0;
    a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function genCandles(n, base) {
  const rnd = mulberry32(20260611);
  const out = [];
  let price = base * 0.972;
  for (let i = 0; i < n; i++) {
    const drift = (base - price) * 0.02;
    const vol = base * 0.0045;
    const open = price;
    const move = (rnd() - 0.5) * 2 * vol + drift + vol * 0.18;
    let close = open + move;
    const hi = Math.max(open, close) + rnd() * vol * 0.9;
    const lo = Math.min(open, close) - rnd() * vol * 0.9;
    out.push({
      open,
      close,
      hi,
      lo
    });
    price = close;
  }
  return out;
}
function TradeChart({
  base
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  useEffect(() => {
    const wrap = wrapRef.current,
      canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    function draw() {
      const w = wrap.clientWidth,
        h = wrap.clientHeight;
      if (!w || !h) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const padR = 58,
        padB = 22,
        padT = 8;
      const plotW = w - padR,
        plotH = h - padB - padT;
      const count = Math.max(24, Math.min(70, Math.floor(plotW / 9)));
      const candles = genCandles(count, base);
      let min = Infinity,
        max = -Infinity;
      candles.forEach(c => {
        if (c.lo < min) min = c.lo;
        if (c.hi > max) max = c.hi;
      });
      const pad = (max - min) * 0.08;
      min -= pad;
      max += pad;
      const y = v => padT + plotH - (v - min) / (max - min) * plotH;
      // grid + price axis
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.textBaseline = 'middle';
      for (let i = 0; i <= 4; i++) {
        const gy = padT + plotH / 4 * i;
        ctx.strokeStyle = 'rgba(255,255,255,0.045)';
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(plotW, gy);
        ctx.stroke();
        const val = max - (max - min) / 4 * i;
        ctx.fillStyle = '#6B7280';
        ctx.fillText(val.toFixed(base > 1000 ? 0 : 2), plotW + 8, gy);
      }
      // candles
      const cw = plotW / count;
      const bw = Math.max(2, cw * 0.62);
      candles.forEach((c, i) => {
        const cx = i * cw + cw / 2;
        const up = c.close >= c.open;
        const col = up ? MINT : DOWN;
        ctx.strokeStyle = col;
        ctx.fillStyle = col;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, y(c.hi));
        ctx.lineTo(cx, y(c.lo));
        ctx.stroke();
        const yo = y(c.open),
          yc = y(c.close);
        const top = Math.min(yo, yc),
          bh = Math.max(1, Math.abs(yc - yo));
        ctx.globalAlpha = up ? 0.92 : 0.92;
        ctx.fillRect(cx - bw / 2, top, bw, bh);
        ctx.globalAlpha = 1;
      });
      // last price line
      const last = candles[candles.length - 1].close;
      const ly = y(last);
      const up = candles[candles.length - 1].close >= candles[candles.length - 1].open;
      ctx.strokeStyle = up ? MINT : DOWN;
      ctx.setLineDash([3, 3]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, ly);
      ctx.lineTo(plotW, ly);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = up ? MINT : DOWN;
      ctx.fillRect(plotW, ly - 9, padR, 18);
      ctx.fillStyle = '#09090B';
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillText(last.toFixed(base > 1000 ? 1 : 2), plotW + 6, ly);
      // time axis
      ctx.fillStyle = '#6B7280';
      ctx.textBaseline = 'alphabetic';
      ['09:30', '11:00', '12:30', '14:00', '15:30'].forEach((t, i) => {
        ctx.fillText(t, plotW / 5 * i + 4, h - 6);
      });
    }
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [base]);
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    className: "chart-canvas-wrap"
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef
  }));
}

/* ===================== SHARED BITS ===================== */
function ViewHead({
  title,
  sub,
  tools
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "greet-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "greet"
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, sub)), tools || /*#__PURE__*/React.createElement("div", {
    className: "greet-tools"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search"
  }, /*#__PURE__*/React.createElement(ISearch, {
    size: 15
  }), "Search markets\u2026"), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn"
  }, /*#__PURE__*/React.createElement(IBell, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, "M")));
}
const cardSty = {
  background: 'var(--k-card)',
  border: '1px solid var(--k-border)',
  borderRadius: 14
};
const mono = {
  fontFamily: 'var(--font-mono)'
};

/* ===================== OVERVIEW ===================== */
const STATS = [[IWallet, 'Vault balance', '$48,920', '+3.2%'], [IProof, 'ZK proofs verified', '1,284', '+18%'], [ITrend, 'Win rate', '73.4%', '+2.7%']];
const RECENT = [['XAU', 'XAU/USD', 'Long · Gold', '+5.5%', '2m'], ['ETH', 'ETH/USDC', 'Long · Spot', '+2.1%', '18m'], ['500', 'US500', 'Short · Index', '+1.8%', '1h']];
function Overview() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "greet-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "greet"
  }, /*#__PURE__*/React.createElement("h3", null, "Good morning, Max \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", null, "Here's your verified trading activity today."), /*#__PURE__*/React.createElement("span", {
    className: "live-pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-dot"
  }), "The Sentinel \xB7 scanning 6 sources")), /*#__PURE__*/React.createElement("div", {
    className: "greet-tools"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search"
  }, /*#__PURE__*/React.createElement(ISearch, {
    size: 15
  }), "Search anything\u2026"), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn"
  }, /*#__PURE__*/React.createElement(IBell, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, "M"))), /*#__PURE__*/React.createElement("div", {
    className: "stats"
  }, STATS.map(([I, label, val, delta]) => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-ico"
  }, /*#__PURE__*/React.createElement(I, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "stat-val"
  }, val), /*#__PURE__*/React.createElement("div", {
    className: "stat-delta"
  }, "\u2191 ", delta, /*#__PURE__*/React.createElement("span", null, "vs last 7 days"))))), /*#__PURE__*/React.createElement("div", {
    className: "lower"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Recent verified trades"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "View all ", /*#__PURE__*/React.createElement(IArrow, {
    size: 13
  }))), RECENT.map(([tag, name, side, pnl, time]) => /*#__PURE__*/React.createElement("div", {
    className: "trade",
    key: name
  }, /*#__PURE__*/React.createElement("div", {
    className: "trade-pair"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trade-dot"
  }, tag), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "trade-name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "trade-side"
  }, side))), /*#__PURE__*/React.createElement("span", {
    className: "verified"
  }, /*#__PURE__*/React.createElement(ICheck, {
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    className: "txt"
  }, "ZK-Verified")), /*#__PURE__*/React.createElement("div", {
    className: "trade-pnl"
  }, pnl), /*#__PURE__*/React.createElement("div", {
    className: "trade-time"
  }, time)))), /*#__PURE__*/React.createElement("div", {
    className: "promo"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Math before", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "money moves.")), /*#__PURE__*/React.createElement("p", null, "Every trade runs a Triple-Layer ZK Proof. If one fails, the Vault refuses to execute.")), /*#__PURE__*/React.createElement("span", {
    className: "promo-cta"
  }, "Read the proof ", /*#__PURE__*/React.createElement(IArrow, {
    size: 14
  })))));
}

/* ===================== TRADE ===================== */
const MKT_STATS = [['24h change', '+1.84%', MINT], ['Open interest', '$78.2M', null], ['Net rate (L/S)', '0.0059%', MINT], ['24h volume', '$8.00M', null]];
const POSITIONS = [['XAU/USD', 'Long', '8.42', '200', '2,401.6', '2,418.5', '+$56.81', true], ['ETH/USDC', 'Long', '0.018', '500', '2,612.0', '2,668.1', '+$29.34', true], ['US500', 'Short', '2.14', '300', '7,340.0', '7,308.2', '+$30.59', true], ['NVDA/USD', 'Short', '3.60', '150', '912.5', '921.4', '-$32.04', true]];
function TradeView() {
  const [side, setSide] = useState('long');
  const [otab, setOtab] = useState('market');
  const [lev, setLev] = useState(10);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "mkt-head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mkt-sel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trade-dot",
    style: {
      width: 30,
      height: 30
    }
  }, "500"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: '#fff',
      fontWeight: 700,
      fontSize: 14
    }
  }, "US500/USD ", /*#__PURE__*/React.createElement(IChevron, {
    size: 14,
    style: {
      color: 'var(--text-muted)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "S&P 500 Index \xB7 Perp"))), /*#__PURE__*/React.createElement("div", {
    className: "mkt-price"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 22,
      fontWeight: 700,
      color: '#fff'
    }
  }, "7,308.25"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "Mark price")), /*#__PURE__*/React.createElement("div", {
    className: "mkt-stats"
  }, MKT_STATS.map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-l"
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "ms-v",
    style: c ? {
      color: c
    } : null
  }, v)))), /*#__PURE__*/React.createElement("span", {
    className: "mkt-zk"
  }, /*#__PURE__*/React.createElement(IProof, {
    size: 13
  }), "ZK-Verified market")), /*#__PURE__*/React.createElement("div", {
    className: "tradewrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tf-row"
  }, ['1m', '15m', '1h', '4h', '1D'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: 'tf' + (t === '15m' ? ' on' : '')
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "tool-row"
  }, /*#__PURE__*/React.createElement(ICandle, {
    size: 15
  }), /*#__PURE__*/React.createElement(ISettings, {
    size: 15
  }), /*#__PURE__*/React.createElement(IMax, {
    size: 15
  }))), /*#__PURE__*/React.createElement(TradeChart, {
    base: 7308
  })), /*#__PURE__*/React.createElement("div", {
    className: "order"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ls-toggle"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'ls long' + (side === 'long' ? ' on' : ''),
    onClick: () => setSide('long')
  }, "Long"), /*#__PURE__*/React.createElement("button", {
    className: 'ls short' + (side === 'short' ? ' on' : ''),
    onClick: () => setSide('short')
  }, "Short")), /*#__PURE__*/React.createElement("div", {
    className: "otabs"
  }, ['market', 'limit', 'stop'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: 'otab' + (otab === t ? ' on' : ''),
    onClick: () => setOtab(t)
  }, t[0].toUpperCase() + t.slice(1)))), /*#__PURE__*/React.createElement("label", {
    className: "ofield"
  }, /*#__PURE__*/React.createElement("span", null, "Collateral"), /*#__PURE__*/React.createElement("div", {
    className: "ofield-in"
  }, /*#__PURE__*/React.createElement("b", null, "100"), /*#__PURE__*/React.createElement("span", {
    className: "unit"
  }, "USDC"))), /*#__PURE__*/React.createElement("div", {
    className: "lev-row"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Leverage"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: MINT,
      fontWeight: 700,
      ...mono
    }
  }, lev, "x")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1",
    max: "50",
    value: lev,
    onChange: e => setLev(+e.target.value),
    style: {
      width: '100%',
      accentColor: MINT
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "zk-note"
  }, /*#__PURE__*/React.createElement(IProof, {
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, "Triple-Layer ZK Proof runs before this trade can execute.")), /*#__PURE__*/React.createElement("button", {
    className: 'order-btn' + (side === 'short' ? ' short' : '')
  }, "Review & Prove ", side === 'long' ? 'Long' : 'Short', " ", /*#__PURE__*/React.createElement(IArrow, {
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    className: "panel",
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-head",
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptabs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ptab on"
  }, "Positions ", /*#__PURE__*/React.createElement("em", null, "4")), /*#__PURE__*/React.createElement("span", {
    className: "ptab"
  }, "Orders"), /*#__PURE__*/React.createElement("span", {
    className: "ptab"
  }, "History")), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Close all")), /*#__PURE__*/React.createElement("div", {
    className: "tbl-scroll"
  }, /*#__PURE__*/React.createElement("table", {
    className: "ptable"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Market & Side"), /*#__PURE__*/React.createElement("th", null, "Size"), /*#__PURE__*/React.createElement("th", null, "Collateral"), /*#__PURE__*/React.createElement("th", null, "Entry"), /*#__PURE__*/React.createElement("th", null, "Mark"), /*#__PURE__*/React.createElement("th", null, "PnL"), /*#__PURE__*/React.createElement("th", null, "Proof"))), /*#__PURE__*/React.createElement("tbody", null, POSITIONS.map(([m, s, sz, col, ent, mark, pnl, ok]) => {
    const up = pnl[0] === '+';
    return /*#__PURE__*/React.createElement("tr", {
      key: m
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "pm"
    }, m), " ", /*#__PURE__*/React.createElement("span", {
      className: 'pside ' + (s === 'Long' ? 'l' : 's')
    }, s)), /*#__PURE__*/React.createElement("td", {
      style: mono
    }, sz), /*#__PURE__*/React.createElement("td", {
      style: mono
    }, col, " ", /*#__PURE__*/React.createElement("span", {
      className: "u"
    }, "USDC")), /*#__PURE__*/React.createElement("td", {
      style: mono
    }, ent), /*#__PURE__*/React.createElement("td", {
      style: mono
    }, mark), /*#__PURE__*/React.createElement("td", {
      style: {
        ...mono,
        color: up ? MINT : DOWN,
        fontWeight: 700
      }
    }, pnl), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "verified"
    }, /*#__PURE__*/React.createElement(ICheck, {
      size: 12
    }), /*#__PURE__*/React.createElement("span", {
      className: "txt"
    }, "Verified"))));
  }))))));
}

/* ===================== SYFX AI CHAT ===================== */
const THREADS = [['BTC chop + gold setup', true], ['ETH momentum scan', false], ['Hedge my portfolio', false], ['Weekly macro brief', false], ['Funding flush watch', false]];

// scripted human <-> AI conversation (casual, real-time) — full flow:
// chop talk -> build strategy -> trigger -> approve -> execute -> result -> why -> small loss
const SCRIPT = [{
  role: 'user',
  text: "yo what's btc doing rn? feels choppy af 😅"
}, {
  role: 'ai',
  text: "honestly it's a mess lol. stuck between 64k and 66k all week, no clean trend. Sentinel's flagging heavy funding on Hyperliquid too — longs are paying just to stay in rn."
}, {
  role: 'user',
  text: "so basically everyone's long. smells like a trap"
}, {
  role: 'ai',
  text: "yeah pretty much. when funding gets that lopsided it usually flushes. if we lose 65k i'd rather be short than try to catch the knife 🔪"
}, {
  role: 'user',
  text: "ok forget btc for now. i actually wanted to play gold this week"
}, {
  role: 'ai',
  chip: 'scanned 6 live sources',
  text: "gold's the cleaner trade tbh. CPI drops thursday so expect a wick, but ETF flows are net positive and the Fed's sounding dovish. RSI tapped 33 at the london open — that's literally your rulebook trigger 👀"
}, {
  role: 'user',
  text: "ok let's build it. small size though, i don't trust this market"
}, {
  role: 'ai',
  text: "smart. here's what i'm locking in — long gold, 5x, 2% stop, target +5.5%, hard cap $250 risk. compiling it into your ZK-Rulebook now:",
  card: 'rulebook'
}, {
  role: 'ai',
  text: "locked 🔒 the Sentinel watches for the exact trigger and pings you before anything fires. you're always the one who approves."
}, {
  role: 'user',
  text: "perfect. ping me when it hits"
}, {
  role: 'ai',
  chip: 'trigger detected · 1h',
  text: "ok we're live 🚨 RSI just printed 33 again at the london open. all three proofs are passing — want me to send it?",
  card: 'advisory'
}, {
  role: 'user',
  text: "send it 🚀"
}, {
  role: 'ai',
  text: "executing through your vault 🔐 ... filled at 2,401.0. sit tight, i'll watch it for you."
}, {
  role: 'ai',
  text: "boom 💚 just closed at target. here's the receipt:",
  card: 'win'
}, {
  role: 'user',
  text: "LETS GOOO 🔥 ok but why'd you pick gold over the btc short?"
}, {
  role: 'ai',
  text: "couple reasons. btc was a coin-flip — pure chop with trap-y funding, no real edge. gold actually had one: a clean RSI reset, macro tailwind from ETF inflows + a dovish fed, and a tight invalidation i could define. higher conviction, smaller risk. i only fire when Source, Inference and Adherence all prove out — btc never gave me that."
}, {
  role: 'user',
  text: "makes sense. didn't we take a small L earlier too?"
}, {
  role: 'ai',
  text: "yeah, the eth scalp tapped its stop — small by design though, that's the 2% cap doing its job:",
  card: 'loss'
}, {
  role: 'ai',
  text: "net we're still comfortably green for the week 📈 want me to scan for the next setup, or call it here?"
}];
function TypingDots() {
  return /*#__PURE__*/React.createElement("div", {
    className: "msg ai"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-ava"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "typing"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)));
}
function AdvCard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "adv-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "adv-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adv-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-dot"
  }), "ADVISORY MODE"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "XAU/USD")), /*#__PURE__*/React.createElement("div", {
    className: "adv-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Side"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: MINT
    }
  }, "Long")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Size"), /*#__PURE__*/React.createElement("b", null, "$250")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Entry"), /*#__PURE__*/React.createElement("b", {
    style: mono
  }, "2,401.0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Stop"), /*#__PURE__*/React.createElement("b", {
    style: mono
  }, "\u22122.0%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Target"), /*#__PURE__*/React.createElement("b", {
    style: {
      ...mono,
      color: MINT
    }
  }, "+5.5%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Leverage"), /*#__PURE__*/React.createElement("b", {
    style: mono
  }, "5\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "adv-proofs"
  }, ['Source', 'Inference', 'Adherence'].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    className: "pchk"
  }, /*#__PURE__*/React.createElement(ICheck, {
    size: 12
  }), p))), /*#__PURE__*/React.createElement("div", {
    className: "adv-btns"
  }, /*#__PURE__*/React.createElement("button", {
    className: "adv-approve"
  }, "Approve & Execute"), /*#__PURE__*/React.createElement("button", {
    className: "adv-decline"
  }, "Decline")));
}
function RulebookCard() {
  const rules = [['market', 'XAU/USD · Long'], ['entry', 'RSI < 35'], ['stop_loss', '2%'], ['target', '+5.5%'], ['risk_cap', '$250'], ['leverage', '5×']];
  return /*#__PURE__*/React.createElement("div", {
    className: "rule-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rule-head"
  }, /*#__PURE__*/React.createElement(IProof, {
    size: 13
  }), "ZK-RULEBOOK \xB7 LOCKED"), /*#__PURE__*/React.createElement("div", {
    className: "rule-lines"
  }, rules.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk"
  }, k), " = ", /*#__PURE__*/React.createElement("span", {
    className: "rv"
  }, v)))));
}
function ResultCard({
  win
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'result-card' + (win ? '' : ' loss')
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rc-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-badge"
  }, win ? '✓ TARGET HIT' : '○ STOPPED OUT'), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, win ? 'XAU/USD · Long' : 'ETH/USDC · Long')), /*#__PURE__*/React.createElement("div", {
    className: "rc-pnl"
  }, win ? '+5.5%' : '−0.8%'), /*#__PURE__*/React.createElement("div", {
    className: "rc-amt"
  }, win ? '+$68.75' : '−$4.10', /*#__PURE__*/React.createElement("span", null, "realized \xB7 to vault")), /*#__PURE__*/React.createElement("div", {
    className: "rc-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Entry"), /*#__PURE__*/React.createElement("b", null, win ? '2,401.0' : '2,612.0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Exit"), /*#__PURE__*/React.createElement("b", null, win ? '2,533.1' : '2,591.1')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Held"), /*#__PURE__*/React.createElement("b", null, win ? '6h 12m' : '41m'))), /*#__PURE__*/React.createElement("div", {
    className: "rc-receipt"
  }, /*#__PURE__*/React.createElement(IProof, {
    size: 13
  }), "ZK Receipt ", /*#__PURE__*/React.createElement("code", null, win ? '0x9c4e…e2' : '0x71af…3b'), " \xB7 0G Network"));
}
function ChatView() {
  const [msgs, setMsgs] = useState([]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState('');
  const [live, setLive] = useState(false);
  const convRef = useRef(null);
  const inputRef = useRef(null);
  const startedRef = useRef(false);
  const aliveRef = useRef(false);

  // auto-scroll to newest — but only if the user is already near the bottom,
  // so they can freely scroll up to re-read earlier messages
  useEffect(() => {
    const c = convRef.current;
    if (!c) return;
    const nearBottom = c.scrollHeight - c.scrollTop - c.clientHeight < 160;
    if (nearBottom) c.scrollTop = c.scrollHeight;
  }, [msgs, typing, draft]);

  // play the scripted conversation, then hand control to the user.
  // Resilient to React 18's dev double-invoke: the sequence starts exactly once
  // (startedRef) and survives the benign unmount/remount because aliveRef is
  // restored to true on the second mount before the loop's first check fires.
  useEffect(() => {
    aliveRef.current = true;
    if (startedRef.current) return () => {
      aliveRef.current = false;
    };
    startedRef.current = true;
    const wait = ms => new Promise(r => setTimeout(r, ms));
    async function typeInto(text) {
      for (let i = 1; i <= text.length; i++) {
        if (!aliveRef.current) return false;
        setDraft(text.slice(0, i));
        await wait(14 + Math.random() * 30);
      }
      await wait(240);
      return true;
    }
    async function run() {
      await wait(550);
      for (const step of SCRIPT) {
        if (!aliveRef.current) return;
        if (step.role === 'user') {
          await typeInto(step.text);
          if (!aliveRef.current) return;
          setDraft('');
          setMsgs(m => [...m, {
            role: 'user',
            text: step.text
          }]);
          await wait(420);
        } else {
          setTyping(true);
          await wait(850 + Math.random() * 600);
          if (!aliveRef.current) return;
          setTyping(false);
          setMsgs(m => [...m, {
            role: 'ai',
            text: step.text,
            chip: step.chip,
            card: step.card
          }]);
          await wait(step.card ? 850 : 600);
        }
      }
      if (aliveRef.current) setLive(true);
    }
    run();
    return () => {
      aliveRef.current = false;
    };
  }, []);
  function send() {
    const t = draft.trim();
    if (!t || !live) return;
    setMsgs(m => [...m, {
      role: 'user',
      text: t
    }]);
    setDraft('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, {
        role: 'ai',
        text: "good call — let me pull that from the Sentinel and break it down for you 👇"
      }]);
    }, 1150);
  }
  function renderCard(c) {
    if (c === 'advisory') return /*#__PURE__*/React.createElement(AdvCard, null);
    if (c === 'rulebook') return /*#__PURE__*/React.createElement(RulebookCard, null);
    if (c === 'win') return /*#__PURE__*/React.createElement(ResultCard, {
      win: true
    });
    if (c === 'loss') return /*#__PURE__*/React.createElement(ResultCard, {
      win: false
    });
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "chat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "threads"
  }, /*#__PURE__*/React.createElement("button", {
    className: "new-thread"
  }, /*#__PURE__*/React.createElement(IPlus, {
    size: 15
  }), "New thread"), /*#__PURE__*/React.createElement("div", {
    className: "th-sec"
  }, "Recent"), THREADS.map(([t, on]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: 'thread' + (on ? ' on' : '')
  }, /*#__PURE__*/React.createElement(IChat, {
    size: 14
  }), t))), /*#__PURE__*/React.createElement("div", {
    className: "conv-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "conv",
    ref: convRef
  }, msgs.map((m, i) => m.role === 'user' ? /*#__PURE__*/React.createElement("div", {
    className: "msg user",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble"
  }, m.text), /*#__PURE__*/React.createElement("div", {
    className: "u-ava"
  }, "M")) : /*#__PURE__*/React.createElement("div", {
    className: "msg ai",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-ava"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "bubble"
  }, m.chip && /*#__PURE__*/React.createElement("span", {
    className: "sent-chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-dot"
  }), "The Sentinel \xB7 ", m.chip), /*#__PURE__*/React.createElement("p", {
    style: m.chip ? null : {
      marginTop: 0
    }
  }, m.text), m.card && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, renderCard(m.card))))), typing && /*#__PURE__*/React.createElement(TypingDots, null)), /*#__PURE__*/React.createElement("div", {
    className: "composer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "comp-top"
  }, /*#__PURE__*/React.createElement("button", {
    className: "model-sel"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: "",
    style: {
      height: 14
    }
  }), "Syfx AI 1.0 ", /*#__PURE__*/React.createElement(IChevron, {
    size: 13
  })), /*#__PURE__*/React.createElement("button", {
    className: "comp-globe"
  }, /*#__PURE__*/React.createElement(IGlobe, {
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'comp-bar' + (live ? ' on' : ''),
    onClick: () => live && inputRef.current && inputRef.current.focus()
  }, live ? /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') send();
    },
    placeholder: "Message Syfx AI\u2026"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "typed-line"
  }, draft, /*#__PURE__*/React.createElement("span", {
    className: "caret"
  })), /*#__PURE__*/React.createElement("button", {
    className: "send-btn",
    onClick: send,
    disabled: !draft.trim()
  }, /*#__PURE__*/React.createElement(IUp, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "comp-chips"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cchip"
  }, /*#__PURE__*/React.createElement(ISpark, {
    size: 12
  }), "Sentinel scan"), /*#__PURE__*/React.createElement("span", {
    className: "cchip"
  }, "Build rulebook"), /*#__PURE__*/React.createElement("span", {
    className: "cchip"
  }, "Backtest")))));
}

/* ===================== ZK PROOFS ===================== */
const PROOFS = [['0xa3f9…2b1', 'XAU/USD', 'Long', '2m', '0x9c4e…e2'], ['0xb7c2…4d8', 'ETH/USDC', 'Long', '18m', '0x71af…3b'], ['0xc156…e6b', 'US500', 'Short', '1h', '0x5e90…a1'], ['0xd40e…f17', 'NVDA/USD', 'Short', '3h', '0x2dbe…77']];
function ProofsView() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHead, {
    title: "ZK Proofs",
    sub: "Every execution anchors an immutable receipt on the 0G Network."
  }), /*#__PURE__*/React.createElement("div", {
    className: "proofs"
  }, PROOFS.map(([id, mkt, side, time, tx]) => /*#__PURE__*/React.createElement("div", {
    className: "proof-row",
    key: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "proof-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "proof-id",
    style: mono
  }, id), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pm"
  }, mkt), /*#__PURE__*/React.createElement("span", {
    className: 'pside ' + (side === 'Long' ? 'l' : 's')
  }, side), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "\xB7 ", time, " ago"))), /*#__PURE__*/React.createElement("div", {
    className: "proof-checks"
  }, ['Source', 'Inference', 'Adherence'].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    className: "pchk"
  }, /*#__PURE__*/React.createElement(ICheck, {
    size: 12
  }), p))), /*#__PURE__*/React.createElement("div", {
    className: "proof-anchor"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, "0G anchor"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 12,
      color: MINT
    }
  }, tx))))));
}

/* ===================== MARKETS ===================== */
const MARKETS = [['XAU', 'XAU/USD', 'Gold', '2,418.50', '+0.62%', '$120M'], ['ETH', 'ETH/USDC', 'Ethereum', '2,668.10', '+2.14%', '$340M'], ['500', 'US500', 'S&P 500', '7,308.25', '+1.84%', '$78M'], ['BTC', 'BTC/USD', 'Bitcoin', '64,212.0', '-0.80%', '$512M'], ['NVDA', 'NVDA/USD', 'NVIDIA', '921.40', '+3.27%', '$44M'], ['SOL', 'SOL/USDC', 'Solana', '168.20', '+5.10%', '$96M'], ['EUR', 'EUR/USD', 'Euro', '1.0832', '-0.12%', '$210M'], ['WTI', 'WTI/USD', 'Crude Oil', '78.41', '+0.94%', '$33M']];
function MarketsView() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHead, {
    title: "Markets",
    sub: "One intelligence across crypto, forex, indices, and commodities."
  }), /*#__PURE__*/React.createElement("div", {
    className: "panel",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tbl-scroll"
  }, /*#__PURE__*/React.createElement("table", {
    className: "mtable"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Market"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "24h"), /*#__PURE__*/React.createElement("th", null, "24h Volume"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, MARKETS.map(([tag, sym, name, px, chg, vol]) => {
    const up = chg[0] === '+';
    return /*#__PURE__*/React.createElement("tr", {
      key: sym
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "trade-dot"
    }, tag), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "trade-name"
    }, sym), /*#__PURE__*/React.createElement("div", {
      className: "trade-side"
    }, name)))), /*#__PURE__*/React.createElement("td", {
      style: {
        ...mono,
        color: '#fff',
        fontWeight: 600
      }
    }, px), /*#__PURE__*/React.createElement("td", {
      style: {
        ...mono,
        color: up ? MINT : DOWN,
        fontWeight: 700
      }
    }, chg), /*#__PURE__*/React.createElement("td", {
      style: {
        ...mono,
        color: 'var(--text-secondary)'
      }
    }, vol), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "trade-go"
    }, "Trade ", /*#__PURE__*/React.createElement(IArrow, {
      size: 12
    }))));
  }))))));
}

/* ===================== SHELL ===================== */
const NAV_MAIN = [['Overview', 'overview', IHome], ['Trade', 'trade', ICandle], ['Syfx AI', 'chat', IChat], ['ZK Proofs', 'proofs', IProof], ['Markets', 'markets', IMarkets]];
function Sidebar({
  view,
  setView
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "side-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: ""
  }), /*#__PURE__*/React.createElement("b", null, "Syfx")), /*#__PURE__*/React.createElement("div", {
    className: "side-sec"
  }, "Workspace"), NAV_MAIN.map(([label, key, I]) => /*#__PURE__*/React.createElement("div", {
    key: key,
    className: 'nav-item' + (view === key ? ' active' : ''),
    onClick: () => setView(key)
  }, /*#__PURE__*/React.createElement(I, {
    size: 18
  }), label)), /*#__PURE__*/React.createElement("div", {
    className: "side-sec"
  }, "Account"), /*#__PURE__*/React.createElement("div", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(ISettings, {
    size: 18
  }), "Settings"));
}
function Dashboard() {
  const [view, setView] = useState('trade');
  const stageRef = useRef(null);
  const fitRef = useRef(null);
  const dashRef = useRef(null);
  const DESIGN_W = 1080;
  useEffect(() => {
    const stage = stageRef.current,
      fit = fitRef.current,
      dash = dashRef.current;
    if (!stage || !fit || !dash) return;
    let scale = 1,
      lastW = -1,
      lastH = -1;

    // WIDTH → scale (stable: known immediately from the container, set once per real width change)
    function applyScale() {
      const avail = stage.clientWidth - 32;
      if (avail <= 0 || Math.abs(avail - lastW) < 4) return;
      lastW = avail;
      scale = Math.min(1, avail / DESIGN_W);
      dash.style.transform = 'scale(' + scale + ')';
      fit.style.width = DESIGN_W * scale + 'px';
      applyHeight();
    }
    // HEIGHT → fit box (tracks content/font/view changes smoothly, never touches scale)
    function applyHeight() {
      const h = Math.round(dash.offsetHeight * scale);
      if (Math.abs(h - lastH) < 1) return;
      lastH = h;
      fit.style.height = h + 'px';
      try {
        parent.postMessage({
          type: 'syfx-h',
          h: document.body.scrollHeight
        }, '*');
      } catch (e) {}
    }
    applyScale();
    let hRaf = 0;
    function onResize() {
      applyScale();
    }
    window.addEventListener('resize', onResize);
    let ro = null,
      sro = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        cancelAnimationFrame(hRaf);
        hRaf = requestAnimationFrame(applyHeight);
      });
      ro.observe(dash);
      sro = new ResizeObserver(applyScale);
      sro.observe(stage);
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(applyHeight);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(hRaf);
      if (ro) ro.disconnect();
      if (sro) sro.disconnect();
    };
  }, [view]);
  const views = {
    overview: Overview,
    trade: TradeView,
    chat: ChatView,
    proofs: ProofsView,
    markets: MarketsView
  };
  const Active = views[view];
  return /*#__PURE__*/React.createElement("div", {
    className: "dash-stage",
    ref: stageRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-fit",
    ref: fitRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash",
    ref: dashRef
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    setView: setView
  }), /*#__PURE__*/React.createElement("div", {
    className: 'main' + (view === 'chat' ? ' main-chat' : '')
  }, /*#__PURE__*/React.createElement(Active, null)))));
}

/* ---------- NAV / HERO / STRIP ---------- */
function Nav({
  backToSite
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-brand",
    href: "frame.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: "Syfx"
  }), /*#__PURE__*/React.createElement("b", null, "Syfx")), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "frame.html#how"
  }, "How It Works"), /*#__PURE__*/React.createElement("a", {
    href: "frame.html#features"
  }, "Features"), /*#__PURE__*/React.createElement("a", {
    href: "frame.html#markets"
  }, "Markets"), /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, backToSite ? /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(IArrowLeft, {
      size: 15
    }),
    onClick: () => {
      location.href = 'frame.html';
    }
  }, "Back to site") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "nav-getstarted",
    href: "how-it-works.html"
  }, "Get Started"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => {
      location.href = 'waitlist.html';
    }
  }, "Join Waitlist")), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, open ? /*#__PURE__*/React.createElement(IX, {
    size: 20
  }) : /*#__PURE__*/React.createElement(IMenu, {
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'nav-overlay' + (open ? ' open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-overlay-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "frame.html#how",
    onClick: () => setOpen(false)
  }, "How It Works"), /*#__PURE__*/React.createElement("a", {
    href: "frame.html#features",
    onClick: () => setOpen(false)
  }, "Features"), /*#__PURE__*/React.createElement("a", {
    href: "frame.html#markets",
    onClick: () => setOpen(false)
  }, "Markets"), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    onClick: () => setOpen(false)
  }, "Contact")), backToSite ? /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(IArrowLeft, {
      size: 16
    }),
    onClick: () => {
      location.href = 'frame.html';
    }
  }, "Back to site") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => {
      location.href = 'waitlist.html';
    }
  }, "Join Waitlist")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc-wrap",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc-blob"
  }), /*#__PURE__*/React.createElement("div", {
    className: "arc-glow"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement(Badge, null, "\u26A1 Early Access Now Open \u2014 Limited Spots"), /*#__PURE__*/React.createElement("h1", null, "Trade without trust.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "Proven by math.")), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Syfx is the world's first verifiable AI operating system for traders. It mathematically proves every decision before a single dollar moves."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IArrow, {
      size: 18
    }),
    onClick: () => {
      location.href = 'waitlist.html';
    }
  }, "Join the Waitlist"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IArrow, {
      size: 18
    }),
    onClick: () => {
      location.href = 'how-it-works.html';
    }
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    className: "hero-trust"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD12 Non-custodial"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "\u2713 ZK-Verified"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "\u26A1 Built on 0G Network"))));
}
const CHIPS = ['Ethereum', 'Base', 'Arbitrum', 'Hyperliquid', 'Solana', 'Gold', 'Forex', '0G Network', 'RISC Zero'];
function Strip() {
  return /*#__PURE__*/React.createElement("section", {
    className: "strip"
  }, /*#__PURE__*/React.createElement("p", null, "One intelligence \xB7 every market"), /*#__PURE__*/React.createElement("div", {
    className: "strip-row"
  }, CHIPS.map(c => /*#__PURE__*/React.createElement("span", {
    className: "chip",
    key: c
  }, c))));
}

/* ===== PROBLEM (PRD 6.3) ===== */
const PROBLEMS = [['01', 'No explanation. No accountability.', 'Existing bots execute trades without ever telling you why. You trust an algorithm you did not write and cannot audit — and when it fails, the only answer you get is silence.'], ['02', 'Your money sits on their servers.', 'Most platforms hold your funds in centralized wallets they control. When they get hacked, go insolvent, or freeze withdrawals, your capital disappears with them.'], ['03', 'Parameters. Not intelligence.', 'Traditional bots force confusing technical settings, then never adapt. They do not learn, and they do not understand the nuance of your risk tolerance or psychology.']];
function ProblemSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "problem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-label"
  }, "THE PROBLEM"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-h2"
  }, "Most trading bots are black boxes", /*#__PURE__*/React.createElement("br", null), "that hold your money ", /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "hostage.")), /*#__PURE__*/React.createElement("p", {
    className: "sec-sub"
  }, "They can't explain themselves. They make you give up custody. And when they lose your money, there's no record of what they actually did.")), /*#__PURE__*/React.createElement("div", {
    className: "prob-grid"
  }, PROBLEMS.map(([n, t, b]) => /*#__PURE__*/React.createElement("div", {
    className: "prob-card",
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    className: "prob-num"
  }, n, " \u2014"), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, b)))));
}

/* shared scripted-playback hook (React-18 double-invoke safe) */
function usePlayback(script) {
  const [shown, setShown] = useState([]);
  const [typing, setTyping] = useState(false);
  const aliveRef = useRef(false);
  const startedRef = useRef(false);
  useEffect(() => {
    aliveRef.current = true;
    if (startedRef.current) return () => {
      aliveRef.current = false;
    };
    startedRef.current = true;
    const wait = ms => new Promise(r => setTimeout(r, ms));
    (async () => {
      while (aliveRef.current) {
        setShown([]);
        setTyping(false);
        await wait(700);
        for (const s of script) {
          if (!aliveRef.current) return;
          const fromAI = s.role === 'ai' || s.who === 'bot';
          if (fromAI) {
            setTyping(true);
            await wait(1100 + Math.random() * 700);
            if (!aliveRef.current) return;
            setTyping(false);
          } else {
            await wait(650);
          }
          setShown(x => [...x, s]);
          // read pause scales with message length so longer messages stay up longer
          const len = (s.text ? s.text.length : 40) + (s.card ? 90 : 0);
          await wait(Math.min(4200, 1300 + len * 22));
        }
        await wait(11000);
      }
    })();
    return () => {
      aliveRef.current = false;
    };
  }, []);
  return {
    shown,
    typing
  };
}

/* phone status bar + notch */
function PhoneChrome({
  title
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "phone-notch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "phone-status"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    className: "ps-ic"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "11",
    viewBox: "0 0 16 11",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "5",
    width: "3",
    height: "6",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2.5",
    width: "3",
    height: "8.5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "0",
    width: "3",
    height: "11",
    rx: "1"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "11",
    viewBox: "0 0 15 11",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.5 2.2c2.1 0 4 .8 5.4 2.1l1.1-1.2A9.4 9.4 0 0 0 7.5.6 9.4 9.4 0 0 0 1 3.1l1.1 1.2A7.8 7.8 0 0 1 7.5 2.2Zm0 3.1c1.2 0 2.3.5 3.1 1.2l1.1-1.2a6.2 6.2 0 0 0-8.4 0l1.1 1.2A4.6 4.6 0 0 1 7.5 5.3Zm0 3 2-2a2.8 2.8 0 0 0-4 0l2 2Z"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "11",
    viewBox: "0 0 24 11",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "20",
    height: "10",
    rx: "2.5",
    stroke: "currentColor",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "16",
    height: "7",
    rx: "1",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "21.5",
    y: "3.5",
    width: "1.5",
    height: "4",
    rx: "0.75",
    fill: "currentColor",
    opacity: "0.5"
  })))));
}

/* ===== SOLUTION (PRD 6.4) — points + execution flow inside a phone ===== */
const SOL_POINTS = [[IChat, 'Intelligence you can talk to', 'Consult Syfx like a senior analyst who has read every report, chart and headline before you opened your mouth. You build strategy together, in plain conversation.'], [IProof, 'Math before money moves', 'Before a single trade executes, Syfx runs a Triple-Layer Zero-Knowledge Proof that the data is real, the AI reasoned correctly, and your exact rules will be followed.'], [ILock, 'Your funds. Your vault. Always.', 'Syfx is 100% non-custodial. Your capital sits in your personal smart-contract vault. Syfx never holds your money, never touches your keys, and can never drain your funds.']];
const FLOW = [['1', 'You describe your intent', 'Plain English → Syfx AI'], ['2', 'The Sentinel scans', 'Real-time global data'], ['3', 'ZK-Rulebook compiled', 'Your strategy in math'], ['4', 'Triple ZK Proof runs', 'Three verifications'], ['5', 'Vault executes', 'Receipt anchored on 0G']];
function SolutionSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "solution"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-label"
  }, "THE SOLUTION"), /*#__PURE__*/React.createElement("h2", {
    className: "sol-h2"
  }, "Syfx is not a bot.", /*#__PURE__*/React.createElement("br", null), "It is a trading ", /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "operating system.")), /*#__PURE__*/React.createElement("div", {
    className: "sol-points"
  }, SOL_POINTS.map(([I, t, b]) => /*#__PURE__*/React.createElement("div", {
    className: "sol-point",
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol-ico"
  }, /*#__PURE__*/React.createElement(I, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, b)))))), /*#__PURE__*/React.createElement("div", {
    className: "phone-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone cut"
  }, /*#__PURE__*/React.createElement(PhoneChrome, null), /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ps-head"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Execution flow"), /*#__PURE__*/React.createElement("span", null, "XAU/USD \xB7 $300 long"))), FLOW.map(([n, t, s]) => /*#__PURE__*/React.createElement("div", {
    className: "ps-step",
    key: n
  }, /*#__PURE__*/React.createElement("span", {
    className: "ps-num"
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ps-t"
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "ps-s"
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "ps-callout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-pass"
  }, /*#__PURE__*/React.createElement(ICheck, {
    size: 13
  }), "All proofs pass \u2192 Vault unlocks"), /*#__PURE__*/React.createElement("div", {
    className: "pc-fail"
  }, "Any proof fails \u2192 execution refused by code")))))));
}

/* ===== HOW IT WORKS (PRD 6.5) — animated Syfx-AI dashboard conversation ===== */
const HOW_SCRIPT = [{
  role: 'user',
  text: "yo what's gold looking like this week? been eyeing a long but the volatility's got me nervous 😅"
}, {
  role: 'ai',
  chip: 'scanned 6 live sources',
  text: "pulled the live read first. RSI tapped 33 at the london open, ETF flows are net-positive and the fed's sounding dovish. there's a clean setup here."
}, {
  role: 'user',
  text: "ok i'm in. keep it small tho, i don't trust this tape"
}, {
  role: 'ai',
  text: "smart. tight one — small size, 2% stop, +5.5% target. here's the play 👇",
  setup: true
}, {
  role: 'user',
  text: "why long and not just sit it out?"
}, {
  role: 'ai',
  text: "your rules only fire on a deep RSI reset and it printed 33 — macro's a tailwind, not a headwind. higher conviction, capped risk. if it slips i'm out at −2%, no emotion."
}, {
  role: 'user',
  text: "perfect. send it 🚀"
}, {
  role: 'ai',
  text: "done — filled at 2,401.0 🎯 i'll babysit it and ping you the second anything changes."
}];
const HOW_THREADS = [['Gold setup — this week', true], ['ETH momentum scan', false], ['Hedge my portfolio', false], ['BTC chop watch', false], ['Weekly macro brief', false]];
function HowChat() {
  const {
    shown,
    typing
  } = usePlayback(HOW_SCRIPT);
  const convRef = useRef(null);
  const stageRef = useRef(null);
  const fitRef = useRef(null);
  const dashRef = useRef(null);
  const HOW_W = 920;
  useEffect(() => {
    const c = convRef.current;
    if (c) c.scrollTop = c.scrollHeight;
  }, [shown, typing]);
  useEffect(() => {
    let lastW = -1,
      raf = 0;
    function apply() {
      const stage = stageRef.current,
        fit = fitRef.current,
        dash = dashRef.current;
      if (!stage || !fit || !dash) return;
      const avail = stage.clientWidth;
      if (!avail || avail === lastW) return;
      lastW = avail;
      const scale = Math.max(0.2, Math.min(1.15, avail / HOW_W));
      dash.style.transformOrigin = 'top left';
      dash.style.transform = 'scale(' + scale + ')';
      const dh = dash.offsetHeight;
      fit.style.width = HOW_W * scale + 'px';
      fit.style.height = dh * scale + 'px';
      try {
        parent.postMessage({
          type: 'syfx-h',
          h: document.body.scrollHeight
        }, '*');
      } catch (e) {}
    }
    function schedule() {
      apply();
    }
    apply();
    const timers = [60, 200, 500, 1000].map(ms => setTimeout(apply, ms));
    window.addEventListener('resize', apply);
    let ro = null;
    if (typeof ResizeObserver !== 'undefined' && stageRef.current) {
      ro = new ResizeObserver(apply);
      ro.observe(stageRef.current);
    }
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', apply);
      if (ro) ro.disconnect();
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "how-stage",
    ref: stageRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-fit",
    ref: fitRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-dash",
    ref: dashRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-shell"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "threads"
  }, /*#__PURE__*/React.createElement("button", {
    className: "new-thread"
  }, /*#__PURE__*/React.createElement(IPlus, {
    size: 15
  }), "New thread"), /*#__PURE__*/React.createElement("div", {
    className: "th-sec"
  }, "Recent"), HOW_THREADS.map(([t, on]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: 'thread' + (on ? ' on' : '')
  }, /*#__PURE__*/React.createElement(IChat, {
    size: 14
  }), t))), /*#__PURE__*/React.createElement("div", {
    className: "how-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-bar"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: ""
  }), /*#__PURE__*/React.createElement("b", null, "Syfx AI"), /*#__PURE__*/React.createElement("span", {
    className: "live-pill",
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-dot"
  }), "The Sentinel \xB7 live")), /*#__PURE__*/React.createElement("div", {
    className: "how-conv",
    ref: convRef
  }, shown.map((m, i) => m.role === 'user' ? /*#__PURE__*/React.createElement("div", {
    className: "msg user",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble"
  }, m.text), /*#__PURE__*/React.createElement("div", {
    className: "u-ava"
  }, "M")) : /*#__PURE__*/React.createElement("div", {
    className: "msg ai",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-ava"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "bubble"
  }, m.chip && /*#__PURE__*/React.createElement("span", {
    className: "sent-chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-dot"
  }), "The Sentinel \xB7 ", m.chip), /*#__PURE__*/React.createElement("p", {
    style: m.chip ? null : {
      marginTop: 0
    }
  }, m.text), m.setup && /*#__PURE__*/React.createElement("div", {
    className: "adv-card",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "adv-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adv-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-dot"
  }), "SETUP"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "XAU/USD")), /*#__PURE__*/React.createElement("div", {
    className: "adv-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Side"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: MINT
    }
  }, "Long")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Size"), /*#__PURE__*/React.createElement("b", null, "$300")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Entry"), /*#__PURE__*/React.createElement("b", {
    style: mono
  }, "2,401.0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Stop"), /*#__PURE__*/React.createElement("b", {
    style: mono
  }, "\u22122.0%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Target"), /*#__PURE__*/React.createElement("b", {
    style: {
      ...mono,
      color: MINT
    }
  }, "+5.5%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Leverage"), /*#__PURE__*/React.createElement("b", {
    style: mono
  }, "5\xD7"))))))), typing && /*#__PURE__*/React.createElement("div", {
    className: "msg ai"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-ava"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "typing"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    className: "how-composer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hc3d"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hc3d-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "hc-model"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: "",
    style: {
      height: 13
    }
  }), "Syfx AI 1.0 ", /*#__PURE__*/React.createElement(IChevron, {
    size: 12
  })), /*#__PURE__*/React.createElement("span", {
    className: "hc-input"
  }, "Describe your next trade\u2026"), /*#__PURE__*/React.createElement("button", {
    className: "hc-send"
  }, /*#__PURE__*/React.createElement(IUp, {
    size: 15
  }))))))))));
}
const PING = [{
  who: 'bot',
  text: "🔔 Sentinel confirmed our Gold setup. All 3 ZK proofs passed. Execute the $300 long?",
  actions: true
}, {
  who: 'me',
  text: "WHY"
}, {
  who: 'bot',
  text: "RSI hit 33 (your trigger), ETF inflows positive, Fed dovish. Stop −2%, target +5.5%, risk capped at $250."
}, {
  who: 'me',
  text: "Approve ✅"
}, {
  who: 'bot',
  text: "Vault unlocked. Executing… ✅ Filled at 2,401.0. Receipt anchored on 0G."
}];
function AdvisoryPhone() {
  const {
    shown,
    typing
  } = usePlayback(PING);
  const bodyRef = useRef(null);
  useEffect(() => {
    const c = bodyRef.current;
    if (c) c.scrollTop = c.scrollHeight;
  }, [shown, typing]);
  return /*#__PURE__*/React.createElement("div", {
    className: "phone cut"
  }, /*#__PURE__*/React.createElement(PhoneChrome, null), /*#__PURE__*/React.createElement("div", {
    className: "tg-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tg-ava"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tg-name"
  }, "Syfx Bot"), /*#__PURE__*/React.createElement("div", {
    className: "tg-on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-dot"
  }), "online"))), /*#__PURE__*/React.createElement("div", {
    className: "tg-body",
    ref: bodyRef
  }, shown.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: 'tg-msg ' + (m.who === 'me' ? 'me' : 'bot'),
    key: i
  }, m.text, m.actions && /*#__PURE__*/React.createElement("div", {
    className: "tg-actions"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tg-btn"
  }, "Approve"), /*#__PURE__*/React.createElement("span", {
    className: "tg-btn ghost"
  }, "WHY")))), typing && /*#__PURE__*/React.createElement("div", {
    className: "tg-typing"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))));
}
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-label"
  }, "HOW IT WORKS"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-h2"
  }, "From conversation to", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "cryptographically verified execution.")), /*#__PURE__*/React.createElement("p", {
    className: "sec-sub"
  }, "Watch a real Syfx session: you talk, the Sentinel scans, your rulebook compiles, three proofs run \u2014 and only then does the vault move.")), /*#__PURE__*/React.createElement(HowChat, null), /*#__PURE__*/React.createElement("div", {
    className: "adv2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "adv2-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "adv-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "adv-lbl"
  }, "ADVISORY MODE")), /*#__PURE__*/React.createElement("h3", null, "You stay in control \u2014 always."), /*#__PURE__*/React.createElement("p", null, "Before any trade fires, Syfx pings your Telegram with the full setup and its three passing proofs. Interrogate the AI right there \u2014 ask ", /*#__PURE__*/React.createElement("b", null, "WHY"), " and get the complete breakdown."), /*#__PURE__*/React.createElement("p", null, "Only after your green light does the vault unlock and execute. No surprise trades. No black box. Just a conversation that ends in math.")), /*#__PURE__*/React.createElement("div", {
    className: "phone-col"
  }, /*#__PURE__*/React.createElement(AdvisoryPhone, null))));
}

/* ===== FEATURES (PRD 6.6) — six cards ===== */
const FEATURES = [[IBrain, 'Syfx AI 1.0', 'Conversational intelligence that explains its thesis, cites its sources, and learns your trading psychology permanently through Infinite Memory.'], [ISentinel, 'The Sentinel', 'A relentless global data engine scanning social media, macro news, central-bank speeches and on-chain liquidity pools simultaneously — 24/7.'], [IProof, 'Triple-Layer ZK Proof', 'Three independent cryptographic proofs verify every trade before execution. Math, not trust.'], [ILock, 'Non-Custodial Vault', 'Your funds never leave your personal smart contract. Syfx cannot hold, move, or access your capital without a verified execution proof.'], [IBolt, 'Sentinel Agents', 'Autonomous background agents deployed per strategy, hunting your exact setups across crypto and forex markets around the clock.'], [ITrend, 'ZK Performance Card', 'Every trade generates a publicly verifiable performance record on the 0G Network. No fabricated PnL. No cherry-picked results. Only math.']];
function FeaturesSection() {
  const railRef = useRef(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const mq = window.matchMedia('(max-width: 640px)');
    let timer = 0,
      idle = 0,
      paused = false,
      raf = 0;
    const cards = () => Array.from(rail.children);

    // gentle, smooth emphasis — centered card full, neighbors slightly smaller/dimmer.
    // NO perspective/rotateY (that caused the page-flip lag).
    function emphasize() {
      if (!mq.matches) {
        cards().forEach(c => {
          c.style.transform = '';
          c.style.opacity = '';
        });
        return;
      }
      const mid = rail.scrollLeft + rail.clientWidth / 2;
      let nearest = 0,
        best = Infinity;
      cards().forEach((c, i) => {
        const cc = c.offsetLeft + c.offsetWidth / 2;
        const ad = Math.min(Math.abs(cc - mid) / rail.clientWidth, 1);
        c.style.transform = 'scale(' + (1 - ad * 0.10) + ')';
        c.style.opacity = String(1 - ad * 0.4);
        if (Math.abs(cc - mid) < best) {
          best = Math.abs(cc - mid);
          nearest = i;
        }
      });
      if (nearest !== activeRef.current) {
        activeRef.current = nearest;
        setActive(nearest);
      }
    }
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(emphasize);
    }
    function bumpIdle() {
      paused = true;
      clearTimeout(idle);
      idle = setTimeout(() => {
        paused = false;
      }, 3500);
    }
    function slideTo(i) {
      const c = cards()[i];
      if (!c) return;
      rail.scrollTo({
        left: c.offsetLeft - (rail.clientWidth - c.offsetWidth) / 2,
        behavior: 'smooth'
      });
    }
    function tick() {
      if (!mq.matches || paused) return;
      const next = (activeRef.current + 1) % FEATURES.length;
      slideTo(next);
    }
    function startAuto() {
      clearInterval(timer);
      if (mq.matches) timer = setInterval(tick, 5000);
    }
    function onMq() {
      emphasize();
      startAuto();
    }
    rail.addEventListener('scroll', onScroll, {
      passive: true
    });
    rail.addEventListener('pointerdown', bumpIdle, {
      passive: true
    });
    rail.addEventListener('touchstart', bumpIdle, {
      passive: true
    });
    rail.addEventListener('wheel', bumpIdle, {
      passive: true
    });
    window.addEventListener('resize', emphasize);
    if (mq.addEventListener) mq.addEventListener('change', onMq);else if (mq.addListener) mq.addListener(onMq);
    emphasize();
    startAuto();
    const t0 = setTimeout(() => {
      emphasize();
      startAuto();
    }, 300);
    rail._slideTo = slideTo;
    return () => {
      rail.removeEventListener('scroll', onScroll);
      rail.removeEventListener('pointerdown', bumpIdle);
      rail.removeEventListener('touchstart', bumpIdle);
      rail.removeEventListener('wheel', bumpIdle);
      window.removeEventListener('resize', emphasize);
      if (mq.removeEventListener) mq.removeEventListener('change', onMq);else if (mq.removeListener) mq.removeListener(onMq);
      clearInterval(timer);
      clearTimeout(idle);
      clearTimeout(t0);
      cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-label"
  }, "FEATURES"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-h2"
  }, "Every feature built for one", /*#__PURE__*/React.createElement("br", null), "purpose: ", /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "verified execution."))), /*#__PURE__*/React.createElement("div", {
    className: "feat-rail",
    ref: railRef
  }, FEATURES.map(([I, t, b]) => /*#__PURE__*/React.createElement("div", {
    className: "feat",
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    className: "feat-ico"
  }, /*#__PURE__*/React.createElement(I, {
    size: 20
  })), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, b)))), /*#__PURE__*/React.createElement("div", {
    className: "feat-dots",
    "aria-hidden": "true"
  }, FEATURES.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: 'fd' + (i === active ? ' on' : ''),
    onClick: () => {
      const r = railRef.current;
      if (r && r._slideTo) r._slideTo(i);
    }
  }))));
}

/* ===== AUTONOMY SPECTRUM (Execution Mode) ===== */
const MODES = [{
  key: 'advisory',
  tab: 'Advisory · Co-pilot',
  icon: IBrain,
  accent: '#F5A524',
  tint: 'rgba(245,165,36,0.12)',
  border: 'rgba(245,165,36,0.35)',
  glow: 'rgba(245,165,36,0.10)',
  title: 'Advisory Mode — The Elite Co-pilot',
  body: 'The AI acts as your senior research analyst. It scans the globe 24/7, finds a high-confidence setup, builds a reasoning summary, and pings you. It explains the "why" and waits for your Approve or Reject. You are the pilot; the AI is the radar.',
  chips: ['One-tap approve / reject', 'Reasoning summary', 'Telegram pings'],
  flow: [['Sentinel finds a setup', 'Scans global data 24/7'], ['You get a ping', 'Reasoning summary on Telegram'], ['You approve or reject', 'Nothing executes without your call']]
}, {
  key: 'auto',
  tab: 'Autonomous · Full auto',
  icon: IBolt,
  accent: '#00E5A0',
  tint: 'rgba(0,229,160,0.12)',
  border: 'rgba(0,229,160,0.30)',
  glow: 'rgba(0,229,160,0.10)',
  title: 'Autonomous Mode — The Full-Auto Engine',
  body: 'You set the rulebook once; the AI runs it end-to-end. It hunts setups, runs the triple ZK proof, and executes the moment every proof passes — no ping, no wait. You stay in control through your rules and a live, verifiable receipt trail.',
  chips: ['Hands-free execution', 'Rulebook-bound', 'ZK receipt per trade'],
  flow: [['Sentinel finds a setup', 'Matched against your rulebook'], ['Triple ZK proof runs', 'Source · Inference · Adherence'], ['Vault executes instantly', 'Permanent receipt anchored on 0G']]
}];
function AutonomySpectrum() {
  const [mode, setMode] = useState(0);
  const m = MODES[mode];
  const Ico = m.icon;
  const stageRef = useRef(null);
  const fitRef = useRef(null);
  const cardRef = useRef(null);
  const AUTO_W = 820;
  useLayoutEffect(() => {
    const stage = stageRef.current,
      fit = fitRef.current,
      card = cardRef.current;
    if (!stage || !fit || !card) return;
    let scale = 1,
      lastW = -1,
      lastH = -1;
    function applyScale() {
      const avail = stage.clientWidth;
      if (avail <= 0 || Math.abs(avail - lastW) < 2) {
        applyHeight();
        return;
      }
      lastW = avail;
      scale = Math.min(1, avail / AUTO_W);
      card.style.transformOrigin = 'top left';
      card.style.transform = 'scale(' + scale + ')';
      fit.style.width = AUTO_W * scale + 'px';
      applyHeight();
    }
    function applyHeight() {
      const h = Math.round(card.offsetHeight * scale);
      if (Math.abs(h - lastH) < 1) return;
      lastH = h;
      fit.style.height = h + 'px';
    }
    applyScale();
    let hRaf = 0;
    function onResize() {
      applyScale();
    }
    window.addEventListener('resize', onResize);
    let ro = null,
      sro = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        cancelAnimationFrame(hRaf);
        hRaf = requestAnimationFrame(applyHeight);
      });
      ro.observe(card);
      sro = new ResizeObserver(applyScale);
      sro.observe(stage);
    }
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(hRaf);
      if (ro) ro.disconnect();
      if (sro) sro.disconnect();
    };
  }, [mode]);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "autonomy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-label"
  }, "THE AUTONOMY SPECTRUM"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-h2"
  }, "You're never forced to choose", /*#__PURE__*/React.createElement("br", null), "between ", /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "ease and control.")), /*#__PURE__*/React.createElement("p", {
    className: "sec-sub"
  }, "Meet ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "Execution Mode"), " \u2014 one master toggle in your dashboard. Run Syfx as a co-pilot that asks before it acts, or a full-auto engine that executes on its own. Flip it whenever you like; the proofs run either way.")), /*#__PURE__*/React.createElement("div", {
    className: "auto-toggle",
    role: "tablist",
    style: {
      '--am': m.accent
    }
  }, MODES.map((mm, i) => /*#__PURE__*/React.createElement("button", {
    key: mm.key,
    role: "tab",
    "aria-selected": mode === i,
    className: 'auto-tab' + (mode === i ? ' on' : ''),
    onClick: () => setMode(i),
    style: mode === i ? {
      background: mm.accent,
      color: '#09090B'
    } : undefined
  }, mm.tab))), /*#__PURE__*/React.createElement("div", {
    className: "auto-stage",
    ref: stageRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "auto-fit",
    ref: fitRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "auto-card",
    ref: cardRef,
    style: {
      '--am': m.accent,
      '--am-tint': m.tint,
      '--am-border': m.border,
      '--am-glow': m.glow
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "auto-inner",
    key: m.key
  }, /*#__PURE__*/React.createElement("div", {
    className: "auto-card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auto-ico"
  }, /*#__PURE__*/React.createElement(Ico, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, m.title), /*#__PURE__*/React.createElement("p", null, m.body), /*#__PURE__*/React.createElement("div", {
    className: "auto-chips"
  }, m.chips.map(c => /*#__PURE__*/React.createElement("span", {
    className: "auto-chip",
    key: c
  }, /*#__PURE__*/React.createElement(ICheck, {
    size: 13
  }), c))))), /*#__PURE__*/React.createElement("div", {
    className: "auto-flow"
  }, m.flow.map(([t, s], i) => /*#__PURE__*/React.createElement("div", {
    className: "auto-step",
    key: t
  }, /*#__PURE__*/React.createElement("span", {
    className: "auto-step-n"
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "auto-step-t"
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "auto-step-s"
  }, s))))))))));
}

/* ===== MARKETS (PRD 6.7) ===== */
const MK_CRYPTO = [['ETH', 'Ethereum'], ['BASE', 'Base'], ['ARB', 'Arbitrum'], ['SOL', 'Solana'], ['HL', 'Hyperliquid'], ['TRX', 'Tron'], ['SUI', 'Sui'], ['BNB', 'BNB Chain'], ['OP', 'Optimism'], ['AVAX', 'Avalanche'], ['APT', 'Aptos'], ['BLST', 'Blast']];
const MK_FOREX = [['XAU', 'Gold'], ['XAG', 'Silver'], ['OIL', 'Crude Oil'], ['EUR', 'EUR/USD'], ['GBP', 'GBP/USD'], ['JPY', 'USD/JPY'], ['SPX', 'S&P 500'], ['NDX', 'Nasdaq 100'], ['OST', 'Ostium'], ['OAN', 'OANDA (V2)']];
const MK_INFRA = [['0G', '0G Network'], ['R0', 'RISC Zero'], ['PV', 'Privy']];
function MarqueeRow({
  label,
  items,
  infra,
  rev,
  dur
}) {
  const row = hidden => /*#__PURE__*/React.createElement("div", {
    className: "mk-track",
    "aria-hidden": hidden ? 'true' : undefined
  }, items.map(([t, n]) => /*#__PURE__*/React.createElement("span", {
    className: 'chain-tok' + (infra ? ' infra' : ''),
    key: n + (hidden ? '-b' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "cdot"
  }, t), n)));
  return /*#__PURE__*/React.createElement("div", {
    className: "mk-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: 'mk-marquee' + (rev ? ' rev' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "chains-grid mk-marquee-inner",
    style: {
      '--mk-dur': (dur || 26) + 's'
    }
  }, row(false), row(true))));
}
function MarketsSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "markets"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-label"
  }, "MARKETS & INFRASTRUCTURE"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-h2"
  }, "One intelligence. ", /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "Every market."))), /*#__PURE__*/React.createElement(MarqueeRow, {
    label: "Crypto spot & perps",
    items: MK_CRYPTO,
    dur: 30
  }), /*#__PURE__*/React.createElement(MarqueeRow, {
    label: "Forex & RWAs",
    items: MK_FOREX,
    rev: true,
    dur: 26
  }), /*#__PURE__*/React.createElement(MarqueeRow, {
    label: "ZK & storage infrastructure",
    items: MK_INFRA,
    infra: true,
    dur: 20
  }), /*#__PURE__*/React.createElement("p", {
    className: "chains-note"
  }, "Additional markets and chains added continuously."));
}

/* ===== CREDIBILITY — "don't trust, verify": technology trust signals ===== */
const CREDS = [[IGithub, 'Open-source & auditable', 'Every smart contract and ZK circuit is public. Read the code, replay the proofs, and confirm the math yourself — no blind trust required.'], [IGlobe, 'Anchored on 0G Network', 'Every trade leaves a permanent ZK receipt on 0G Network, so the record of what the AI did — and why — can never be edited or erased.'], [IProof, 'Built on RISC Zero zkVM', 'Proofs run on RISC Zero, the industry-leading zero-knowledge virtual machine trusted by serious ZK infrastructure worldwide.'], [ILock, 'Non-custodial by architecture', 'Your capital lives in your own smart-contract vault. Syfx can never hold, move, or freeze your funds — it is mathematically prevented from doing so.']];
function CredibilitySection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "credibility"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-label"
  }, "VERIFIABLE BY DESIGN"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-h2"
  }, "Don't trust.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "Verify.")), /*#__PURE__*/React.createElement("p", {
    className: "sec-sub"
  }, "Syfx is engineered so you never have to take our word for anything. Every claim on this page is backed by code and cryptography you can inspect.")), /*#__PURE__*/React.createElement("div", {
    className: "cred-grid"
  }, CREDS.map(([I, t, b]) => /*#__PURE__*/React.createElement("div", {
    className: "cred-card",
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    className: "feat-ico"
  }, /*#__PURE__*/React.createElement(I, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, b))))), /*#__PURE__*/React.createElement("div", {
    className: "cred-statement"
  }, /*#__PURE__*/React.createElement("p", null, "Every trade comes with mathematical proof that the data was real, the AI reasoned correctly, and your rules were followed \u2014 ", /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "checkable by anyone, owned by you."))));
}

/* ===== OUR COMMUNITIES ===== */
const COMMS = [['X / Twitter', /*#__PURE__*/React.createElement(IX, {
  size: 26
})], ['Telegram', /*#__PURE__*/React.createElement(ISend, {
  size: 26
})], ['Discord', /*#__PURE__*/React.createElement(IDiscord, {
  size: 26
})], ['LinkedIn', /*#__PURE__*/React.createElement(ILinkedIn, {
  size: 26
})]];
function CommunitiesSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "community"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-label"
  }, "OUR COMMUNITIES"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-h2"
  }, "Build with us."), /*#__PURE__*/React.createElement("p", {
    className: "sec-sub"
  }, "Syfx is built in the open. Follow the journey, ask questions, and shape what comes next \u2014 pick your corner of the community below.")), /*#__PURE__*/React.createElement("div", {
    className: "comm-row"
  }, COMMS.map(([name, icon]) => /*#__PURE__*/React.createElement("a", {
    className: "comm",
    href: "#",
    key: name,
    "aria-label": name
  }, /*#__PURE__*/React.createElement("span", {
    className: "comm-ico"
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: "comm-name"
  }, name)))));
}

/* ===== FAQ ===== */
const FAQS = [['What is Syfx?', "Syfx is a verifiable AI operating system for traders. You build strategy in plain conversation, and every trade is backed by a triple-layer zero-knowledge proof before a single dollar moves — so you can verify the AI's work instead of trusting it blindly."], ['Is Syfx custodial? Can it touch my funds?', 'No. Syfx is 100% non-custodial by architecture. Your capital lives in your own smart-contract vault — Syfx can never hold, move, or freeze your funds without a verified execution proof.'], ['What do early-access members get?', 'Founding members get a permanent badge on their profile, Elite tier free for 30 days, and a direct line to the team. Early access is limited — joining the waitlist locks in your spot.'], ['Which markets and chains are supported?', 'Crypto spot and perps across Ethereum, Base, Arbitrum, Hyperliquid and Solana, plus forex and RWAs via Ostium and OANDA. Proofs are anchored on the 0G Network, with more markets added continuously.'], ['How do the ZK proofs actually work?', 'Before execution, Syfx runs three independent cryptographic proofs — that the market data was real, the AI reasoned correctly, and your exact rules were followed. If any one fails, the vault physically refuses to execute. Enforced by code, not policy.']];
function FAQSection() {
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-label"
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-h2"
  }, "Questions, ", /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "answered."))), /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    className: 'faq-item' + (open === i ? ' open' : ''),
    key: q
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, q, /*#__PURE__*/React.createElement("span", {
    className: "chev"
  }, /*#__PURE__*/React.createElement(IPlus, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "faq-a",
    style: {
      maxHeight: open === i ? 240 : 0
    }
  }, /*#__PURE__*/React.createElement("p", null, a))))));
}

/* ===== WAITLIST CTA ===== */
function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(true);
  const [done, setDone] = useState(false);
  function submit(e) {
    if (e) e.preventDefault();
    if (email.trim()) setDone(true);
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "wl",
    id: "waitlist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wl-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wl-card"
  }, !done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wl-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wl-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-dot"
  }), "EARLY ACCESS \u2014 LIMITED SPOTS"), /*#__PURE__*/React.createElement("h2", null, "Be first when", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "Syfx goes live.")), /*#__PURE__*/React.createElement("p", {
    className: "wl-lead"
  }, "Join the early-access list for the verifiable AI trading OS."), /*#__PURE__*/React.createElement("p", {
    className: "wl-note"
  }, "Product updates, Syfx Points announcements, and rollout news \u2014 straight to your inbox. Founding members get Elite tier free for 30 days and a permanent profile badge."), /*#__PURE__*/React.createElement("div", {
    className: "wl-pills"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wl-pill"
  }, /*#__PURE__*/React.createElement(ICheck, {
    size: 13
  }), "Founding Member"), /*#__PURE__*/React.createElement("span", {
    className: "wl-pill"
  }, /*#__PURE__*/React.createElement(ICheck, {
    size: 13
  }), "Elite \u2014 free 30 days"), /*#__PURE__*/React.createElement("span", {
    className: "wl-pill"
  }, /*#__PURE__*/React.createElement(ICheck, {
    size: 13
  }), "Direct team line"))), /*#__PURE__*/React.createElement("div", {
    className: "wl-right"
  }, /*#__PURE__*/React.createElement("form", {
    className: "wl-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit"
  }, "Join the Waitlist")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'wl-consent' + (agree ? ' on' : ''),
    onClick: () => setAgree(a => !a)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbox"
  }, agree && /*#__PURE__*/React.createElement(ICheck, {
    size: 12
  })), "I agree to receive product updates and early-access news from Syfx."), /*#__PURE__*/React.createElement("p", {
    className: "wl-fine"
  }, "Join ", /*#__PURE__*/React.createElement("b", null, "4,200+"), " traders on the waitlist. No spam. Unsubscribe anytime."))) : /*#__PURE__*/React.createElement("div", {
    className: "wl-success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tick"
  }, /*#__PURE__*/React.createElement(ICheck, {
    size: 28
  })), /*#__PURE__*/React.createElement("h3", null, "You're on the list."), /*#__PURE__*/React.createElement("p", null, "Welcome to Syfx. We'll email you the moment early access opens."), /*#__PURE__*/React.createElement("div", {
    className: "wl-share"
  }, /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement(IX, {
    size: 14
  }), "Share on X"), /*#__PURE__*/React.createElement("button", null, "Copy link")), /*#__PURE__*/React.createElement("p", {
    className: "pos"
  }, "Position ", /*#__PURE__*/React.createElement("b", null, "#1,284"), " in line"))));
}

/* ===== FOOTER ===== */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: ""
  }), /*#__PURE__*/React.createElement("b", null, "Syfx")), /*#__PURE__*/React.createElement("p", null, "The verifiable AI operating system for traders. Trade without trust \u2014 proven by math."), /*#__PURE__*/React.createElement("div", {
    className: "foot-social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "X"
  }, /*#__PURE__*/React.createElement(IX, {
    size: 16
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Telegram"
  }, /*#__PURE__*/React.createElement(ISend, {
    size: 16
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Discord"
  }, /*#__PURE__*/React.createElement(IDiscord, {
    size: 16
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(ILinkedIn, {
    size: 16
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "GitHub"
  }, /*#__PURE__*/React.createElement(IGithub, {
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    className: "foot-links"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Product"), /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "How It Works"), /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "Features"), /*#__PURE__*/React.createElement("a", {
    href: "#markets"
  }, "Markets"), /*#__PURE__*/React.createElement("a", {
    href: "#waitlist"
  }, "Join Waitlist")), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "Careers")), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Connect"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "X / Twitter"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Telegram"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Discord")))), /*#__PURE__*/React.createElement("div", {
    className: "foot-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "foot-disc"
  }, "Early access is limited. Digital assets involve substantial risk of loss."), /*#__PURE__*/React.createElement("div", {
    className: "foot-bar-right"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms"), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Syfx"))), /*#__PURE__*/React.createElement("div", {
    className: "foot-mark",
    "aria-hidden": "true"
  }, "Syfx"));
}
function HowItWorksPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    backToSite: true
  }), /*#__PURE__*/React.createElement("header", {
    className: "hiw-hero"
  }, /*#__PURE__*/React.createElement(Badge, null, "\u26A1 Live Product Demo"), /*#__PURE__*/React.createElement("h1", {
    className: "hiw-h1"
  }, "See Syfx ", /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "in action.")), /*#__PURE__*/React.createElement("p", {
    className: "hiw-sub"
  }, "A full walkthrough of the real workspace \u2014 trade execution, the Syfx AI conversation, ZK proofs, and markets, all in one interactive dashboard.")), /*#__PURE__*/React.createElement(Dashboard, null), /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "conversation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-label"
  }, "THE CONVERSATION"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-h2"
  }, "From plain English to", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "mint"
  }, "a cryptographically verified trade."))), /*#__PURE__*/React.createElement(HowChat, null)), /*#__PURE__*/React.createElement(FAQSection, null), /*#__PURE__*/React.createElement(Footer, null));
}
function Page() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Dashboard, null), /*#__PURE__*/React.createElement(Strip, null), /*#__PURE__*/React.createElement(ProblemSection, null), /*#__PURE__*/React.createElement(SolutionSection, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(FeaturesSection, null), /*#__PURE__*/React.createElement(AutonomySpectrum, null), /*#__PURE__*/React.createElement(MarketsSection, null), /*#__PURE__*/React.createElement(CredibilitySection, null), /*#__PURE__*/React.createElement(CommunitiesSection, null), /*#__PURE__*/React.createElement(FAQSection, null), /*#__PURE__*/React.createElement(WaitlistCTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
function initReveal() {
  try {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var els = document.querySelectorAll('.sec, .strip, .wl');
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (e) {
        e.classList.add('in');
      });
      return;
    }
    // alternate entrance direction/axis per section for a varied, modern feel
    var variants = ['rv-up', 'rv-left', 'rv-zoom', 'rv-right', 'rv-tiltL', 'rv-up', 'rv-tiltR', 'rv-left'];
    els.forEach(function (e, i) {
      e.classList.add('reveal', variants[i % variants.length]);
    });
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -8% 0px'
    });
    els.forEach(function (e) {
      io.observe(e);
    });
  } catch (e) {}
}
function mount() {
  const NS = window.SyfxDesignSystem_5de6e8;
  if (!NS || !NS.Button) {
    return requestAnimationFrame(mount);
  }
  Button = NS.Button;
  Badge = NS.Badge;
  const el = document.getElementById('app');
  const page = document.body.dataset.page;
  if (!window.__syfxRoot) window.__syfxRoot = ReactDOM.createRoot(el);
  window.__syfxRoot.render(page === 'how-it-works' ? /*#__PURE__*/React.createElement(HowItWorksPage, null) : /*#__PURE__*/React.createElement(Page, null));
  setTimeout(initReveal, 450);
  // dismiss splash first, THEN reveal app — no crossfade/overlap window where both are visible
  setTimeout(() => {
    const sp = document.getElementById('splash');
    if (sp) {
      sp.classList.add('hide');
      setTimeout(() => {
        if (sp.parentNode) sp.parentNode.removeChild(sp);
        el.classList.add('ready');
      }, 650);
    } else {
      el.classList.add('ready');
    }
  }, 1100);
}
mount();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/waitlist/waitlist.jsx
try { (() => {
/* ===== Parts1.jsx ===== */
/* Syfx Waitlist — shared section primitives + Nav + Hero + Problem */
const {
  Button,
  Input,
  Badge,
  Pill,
  Card,
  IconCircle,
  CodeBlock,
  SectionLabel
} = window.SyfxDesignSystem_5de6e8;
const MAX = 1200;

/* ---------- shared layout helpers ---------- */
function Section({
  children,
  bg = 'var(--bg-primary)',
  id,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-screen-label": id,
    style: {
      background: bg,
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAX,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
function Heading({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      margin: '14px 0 0',
      maxWidth: 760,
      textWrap: 'balance',
      ...style
    }
  }, children);
}
function Sub({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '18px 0 0',
      maxWidth: 620,
      ...style
    }
  }, children);
}

/* ---------- 01 · Navigation ---------- */
function Nav({
  onJoin
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.getElementById('syfx-scroll') || window;
    const el = document.getElementById('syfx-scroll');
    const handler = () => setScrolled((el ? el.scrollTop : window.scrollY) > 24);
    root.addEventListener('scroll', handler);
    return () => root.removeEventListener('scroll', handler);
  }, []);
  const links = ['How It Works', 'Features', 'Markets', 'Early Access'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '16px 24px',
      background: scrolled ? 'rgba(9,9,11,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background 220ms, border-color 220ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: MAX,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/syfx-mark.png",
    alt: "Syfx",
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: 'var(--accent-mint)',
      letterSpacing: '-0.02em'
    }
  }, "Syfx")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    },
    className: "syfx-navlinks"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onJoin();
    },
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      transition: 'color 150ms'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--accent-mint)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-secondary)'
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onJoin
  }, "Join Waitlist")));
}

/* ---------- glow orbs ---------- */
function GlowOrbs() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 440,
      height: 440,
      borderRadius: '50%',
      background: 'var(--accent-mint)',
      opacity: 0.10,
      filter: 'blur(80px)',
      top: -160,
      left: '-4%',
      animation: 'syfx-pulse 7s var(--ease-standard) infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 380,
      height: 380,
      borderRadius: '50%',
      background: 'var(--accent-mint)',
      opacity: 0.06,
      filter: 'blur(80px)',
      bottom: -140,
      right: '2%',
      animation: 'syfx-pulse 8s var(--ease-standard) infinite'
    }
  }));
}

/* ---------- 02 · Hero ---------- */
function Hero({
  onJoin
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "hero",
    style: {
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      overflow: 'hidden',
      background: 'var(--bg-primary)'
    }
  }, /*#__PURE__*/React.createElement(GlowOrbs, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      maxWidth: 820,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "\u26A1 Early Access Now Open \u2014 Limited Spots"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 62,
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      color: 'var(--text-primary)',
      margin: '26px 0 0',
      textWrap: 'balance'
    }
  }, "The World's First", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-mint)'
    }
  }, "Verifiable AI OS"), /*#__PURE__*/React.createElement("br", null), "for Traders."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '24px 0 0',
      maxWidth: 580
    }
  }, "Syfx doesn't just execute trades. It mathematically proves every decision before a single dollar moves."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onJoin();
    },
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 36,
      width: '100%',
      maxWidth: 480,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 240px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "Enter your email address",
    size: "lg"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg"
  }, "Join the Waitlist")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      margin: '12px 0 0'
    }
  }, "No credit card. No commitment. Early access only."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginTop: 28,
      fontSize: 13,
      color: 'var(--text-secondary)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD12 Non-custodial"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-mint)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "\u2713 ZK-Verified"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-mint)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "\u26A1 Built on 0G Network")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "See how it works"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-mint)',
      fontSize: 18,
      animation: 'syfx-pulse 2s ease-in-out infinite'
    }
  }, "\u2304"))));
}

/* ---------- 03 · Problem ---------- */
function Problem() {
  const cards = [{
    n: '01 —',
    t: 'No Explanation. No Accountability.',
    b: 'Existing bots execute trades without ever telling you why. You are asked to trust an algorithm you did not write and cannot audit. When it fails, the only answer you get is silence.'
  }, {
    n: '02 —',
    t: 'Your Money Sits on Their Servers.',
    b: 'Most platforms hold your funds in centralized wallets they control. When they get hacked, go insolvent, or simply decide to freeze withdrawals — your capital disappears with them.'
  }, {
    n: '03 —',
    t: 'Parameters. Not Intelligence.',
    b: 'Traditional bots force you to set confusing technical parameters. They do not adapt. They do not learn. They do not understand the nuance of your risk tolerance or trading psychology.'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "problem",
    bg: "var(--bg-primary)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "THE PROBLEM"), /*#__PURE__*/React.createElement(Heading, {
    style: {
      margin: '14px auto 0'
    }
  }, "Most trading bots are black boxes that hold your money hostage."), /*#__PURE__*/React.createElement(Sub, {
    style: {
      margin: '18px auto 0'
    }
  }, "They can't explain themselves. They require you to give up custody of your funds. And when they lose your money, there's no record of what they actually did.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginTop: 52
    },
    className: "syfx-grid-3"
  }, cards.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.n,
    lift: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      color: 'var(--accent-mint)'
    }
  }, c.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '14px 0 10px'
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, c.b)))));
}
Object.assign(window, {
  Section,
  Heading,
  Sub,
  Nav,
  Hero,
  Problem,
  GlowOrbs,
  MAX
});

/* ===== Parts2.jsx ===== */
/* Syfx Waitlist — Solution + How It Works */
const {
  Button: _B,
  Card: _Card,
  IconCircle: _IC,
  CodeBlock: _CB,
  SectionLabel: _SL
} = window.SyfxDesignSystem_5de6e8;

/* ---------- 04 · Solution Overview ---------- */
function Solution() {
  const points = [{
    icon: '💬',
    t: 'Intelligence You Can Talk To',
    b: 'You consult Syfx AI like a senior analyst who has read every financial report, price chart, and market headline before you even opened your mouth. You build your strategy together in plain conversation.'
  }, {
    icon: '🛡️',
    t: 'Math Before Money Moves',
    b: 'Before a single trade executes, Syfx runs a Triple Layer Zero-Knowledge Proof that guarantees the market data is real, the AI reasoned correctly, and your exact rules will be followed.'
  }, {
    icon: '🏦',
    t: 'Your Funds. Your Vault. Always.',
    b: 'Syfx is 100% non-custodial. Your capital sits in your personal smart contract vault. Syfx never holds your money, never touches your keys, and can never drain your funds.'
  }];
  const steps = [['1', 'You describe your intent', 'Plain English → Syfx AI'], ['2', 'The Sentinel scans', 'Real-time global data collection'], ['3', 'ZK-Rulebook compiled', 'Your strategy in math'], ['4', 'Triple ZK Proof runs', 'Three independent verifications'], ['5', 'Vault executes. Receipt anchored.', 'Permanent ZK record on 0G Network']];
  return /*#__PURE__*/React.createElement(window.Section, {
    id: "solution",
    bg: "var(--bg-surface)"
  }, /*#__PURE__*/React.createElement(_SL, null, "THE SOLUTION"), /*#__PURE__*/React.createElement(window.Heading, null, "Syfx is not a bot.", /*#__PURE__*/React.createElement("br", null), "It is a trading operating system."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      marginTop: 48,
      alignItems: 'start'
    },
    className: "syfx-grid-2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(_IC, {
    size: 40,
    radius: 10
  }, p.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--text-primary)',
      marginBottom: 6
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, p.b))))), /*#__PURE__*/React.createElement(_Card, {
    padding: 0,
    radius: 16,
    hover: false,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0'
    }
  }, steps.map(([n, t, s], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      padding: '18px 24px',
      borderTop: i ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      flexShrink: 0,
      borderRadius: '50%',
      background: 'var(--accent-mint-tint)',
      border: '1px solid var(--accent-mint)',
      color: 'var(--accent-mint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 700
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 16,
      padding: '14px 18px',
      background: 'var(--accent-mint-tint-05)',
      border: '1px solid var(--border-mint)',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--accent-mint)'
    }
  }, "All proofs pass \u2192 Vault unlocks"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "Any single proof fails \u2192 execution physically refused by code")))));
}

/* ---------- 05 · How It Works ---------- */
function HowStep({
  icon,
  label,
  title,
  body,
  children,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '56px 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(_IC, {
    size: 56,
    radius: 14
  }, icon), !last && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: 2,
      marginTop: 8,
      background: 'linear-gradient(to bottom, var(--accent-mint), transparent)',
      opacity: 0.25
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      color: 'var(--accent-mint)',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '8px 0 12px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      margin: 0,
      maxWidth: 640
    }
  }, body), children));
}
function HowItWorks() {
  const proofs = [['green', 'Proof of Source', "The Sentinel's data is 100% authentic and untampered"], ['mint', 'Proof of Inference', 'The AI reasoned correctly on real data without hallucinating'], ['mint', 'Proof of Adherence', 'The trade perfectly matches your rulebook rules']];
  return /*#__PURE__*/React.createElement(window.Section, {
    id: "how",
    bg: "var(--bg-primary)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(_SL, null, "HOW IT WORKS"), /*#__PURE__*/React.createElement(window.Heading, {
    style: {
      margin: '14px auto 0'
    }
  }, "From conversation to cryptographically verified execution.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(HowStep, {
    icon: "\uD83D\uDCAC",
    label: "Step 01",
    title: "You speak. Syfx listens.",
    body: `Open Syfx and describe your trading intent in plain English. Say "I want to trade Gold this week but I'm worried about volatility." Syfx AI doesn't answer blindly — it immediately queries The Sentinel for live market truth before responding.`
  }), /*#__PURE__*/React.createElement(HowStep, {
    icon: "\uD83C\uDF10",
    label: "Step 02",
    title: "The Sentinel scans the world.",
    body: "The Sentinel is Syfx's autonomous global data engine. It scans social media, central bank speeches, macroeconomic reports, deep-web liquidity pools, and on-chain data simultaneously \u2014 24 hours a day. Every recommendation is grounded in real-time, multi-source global truth."
  }), /*#__PURE__*/React.createElement(HowStep, {
    icon: "\uD83D\uDCCB",
    label: "Step 03",
    title: "Your strategy becomes mathematical law.",
    body: "Together, you finalize your trading rules \u2014 entry conditions, stop-loss, position size, exit targets. Syfx AI compiles these into an airtight ZK-Rulebook: a strict mathematical representation of your exact intent. This rulebook cannot be modified without your consent."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(_CB, {
    lines: ['rulebook.entry_condition = "RSI < 35"', 'rulebook.stop_loss       = "2%"', 'rulebook.position_size   = "3% of vault"', 'rulebook.exit_target     = "+5.5%"']
  }))), /*#__PURE__*/React.createElement(HowStep, {
    icon: "\uD83D\uDEE1\uFE0F",
    label: "Step 04",
    title: "Three proofs before a single dollar moves.",
    body: "Before any execution, Syfx generates three independent cryptographic proofs. If any single proof fails \u2014 the Vault physically refuses to execute. This is not a policy. It is mathematics enforced by code."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 20,
      maxWidth: 520
    }
  }, proofs.map(([tone, t, b]) => /*#__PURE__*/React.createElement(_Card, {
    key: t,
    hover: false,
    padding: 16,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(_IC, {
    size: 40,
    radius: 10,
    tone: tone
  }, "\u2713"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, b)))))), /*#__PURE__*/React.createElement(HowStep, {
    last: true,
    icon: "\uD83C\uDFE6",
    label: "Step 05",
    title: "Your Vault executes. Your receipt is permanent.",
    body: "Once all three proofs pass, your personal Syfx Vault executes the trade across Crypto Spot, Crypto Futures, or Forex markets. A permanent ZK Receipt is anchored on the 0G Network \u2014 an immutable, public, cryptographically verifiable record of exactly what the AI did and why."
  })), /*#__PURE__*/React.createElement(_Card, {
    highlight: true,
    hover: false,
    padding: 28,
    radius: 14,
    style: {
      maxWidth: 820,
      margin: '12px auto 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--accent-mint)',
      animation: 'syfx-blink 1.6s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent-mint)'
    }
  }, "ADVISORY MODE")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '0 0 16px'
    }
  }, "You stay in control \u2014 always."), /*#__PURE__*/React.createElement(_CB, {
    lines: ['"The Sentinel confirmed our Gold setup. All three ZK proofs passed.', ' Execute the $300 long? Reply WHY for a full breakdown."']
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: '16px 0 0'
    }
  }, "In Advisory Mode, Syfx pings your Telegram before any trade. Interrogate the AI right there before you approve. Only after your green light does your Vault unlock and execute.")));
}
Object.assign(window, {
  Solution,
  HowItWorks
});

/* ===== Parts3.jsx ===== */
/* Syfx Waitlist — Features + Markets + Credibility */
const {
  Card: _C3,
  IconCircle: _IC3,
  Pill: _P3,
  SectionLabel: _SL3
} = window.SyfxDesignSystem_5de6e8;

/* ---------- 06 · Features ---------- */
function Features() {
  const feats = [['🧠', 'Syfx AI 1.0', 'Conversational trading intelligence that explains its thesis, cites its sources, and learns your trading psychology permanently through Infinite Memory.'], ['🌐', 'The Sentinel', 'A relentless global data engine scanning social media, macro news, central bank speeches, and on-chain liquidity pools simultaneously — 24/7.'], ['🔐', 'Triple Layer ZK Proof', 'Three independent cryptographic proofs verify every trade before execution. Math, not trust.'], ['🏦', 'Non-Custodial Vault', 'Your funds never leave your personal smart contract. Syfx cannot hold, move, or access your capital without a verified execution proof.'], ['⚡', 'Sentinel Agents', 'Autonomous background agents deployed per strategy, hunting your exact setups across Crypto and Forex markets around the clock.'], ['📊', 'ZK Performance Card', 'Every trade generates a publicly verifiable performance record on the 0G Network. No fabricated PnL. No cherry-picked results. Only math.']];
  return /*#__PURE__*/React.createElement(window.Section, {
    id: "features",
    bg: "var(--bg-surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(_SL3, null, "FEATURES"), /*#__PURE__*/React.createElement(window.Heading, {
    style: {
      margin: '14px auto 0'
    }
  }, "Every feature built for one purpose: verified execution.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    },
    className: "syfx-grid-3"
  }, feats.map(([icon, t, b]) => /*#__PURE__*/React.createElement(_C3, {
    key: t,
    lift: true
  }, /*#__PURE__*/React.createElement(_IC3, {
    size: 48,
    style: {
      marginBottom: 16
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '0 0 10px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, b)))));
}

/* ---------- 07 · Markets & Chains ---------- */
function Markets() {
  const groups = [['Crypto Spot & Perps', ['Ethereum', 'Base', 'Arbitrum', 'Hyperliquid', 'Solana'], 'default'], ['Forex & RWAs', ['Ostium', 'OANDA (V2)', 'Gold', 'Forex Pairs'], 'default'], ['ZK & Storage Infrastructure', ['0G Network', 'RISC Zero', 'Privy'], 'infra']];
  return /*#__PURE__*/React.createElement(window.Section, {
    id: "markets",
    bg: "var(--bg-primary)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(_SL3, null, "MARKETS AND INFRASTRUCTURE"), /*#__PURE__*/React.createElement(window.Heading, {
    style: {
      margin: '14px auto 0'
    }
  }, "One intelligence. Every market.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      alignItems: 'center'
    }
  }, groups.map(([label, items, variant]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, items.map(i => /*#__PURE__*/React.createElement(_P3, {
    key: i,
    variant: variant
  }, i)))))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 36
    }
  }, "Additional markets and chains added continuously."));
}

/* ---------- 08 · Credibility ---------- */
function Credibility() {
  const cards = [['🔓', 'Open Source Architecture', "Syfx's smart contracts and ZK proof layer are publicly verifiable at github.com/MaxCybOps. Inspect everything. Trust nothing blindly."], ['⛓️', '0G Network Integration', 'Every ZK receipt is anchored permanently on 0G Network — one of the most advanced decentralized AI and storage networks in Web3.'], ['🔬', 'RISC Zero zkVM', "Syfx's proof system is built on RISC Zero — the industry-leading zero-knowledge virtual machine architecture used by serious ZK infrastructure projects globally."], ['🇳🇬', 'Built from Nigeria', 'Syfx is built by a team from Nigeria — proof that institutional-grade financial infrastructure can emerge from anywhere.']];
  return /*#__PURE__*/React.createElement(window.Section, {
    id: "credibility",
    bg: "var(--bg-surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(_SL3, null, "CREDIBILITY"), /*#__PURE__*/React.createElement(window.Heading, {
    style: {
      margin: '14px auto 0'
    }
  }, "Built in public. Backed by real technology.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      maxWidth: 900,
      margin: '0 auto'
    },
    className: "syfx-grid-2"
  }, cards.map(([icon, t, b]) => /*#__PURE__*/React.createElement(_C3, {
    key: t,
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(_IC3, {
    size: 44
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '2px 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, b)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '32px auto 0',
      background: 'var(--bg-card)',
      borderLeft: '3px solid var(--accent-mint)',
      borderRadius: '0 14px 14px 0',
      padding: '24px 30px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      fontStyle: 'italic',
      lineHeight: 1.6,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "\"We are not asking traders to trust us. We are giving them mathematics they can verify themselves.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--accent-mint)',
      margin: '14px 0 0'
    }
  }, "\u2014 Maxwell Ogbodo, Founder, Syfx")));
}
Object.assign(window, {
  Features,
  Markets,
  Credibility
});

/* ===== Parts4.jsx ===== */
/* Syfx Waitlist — CTA conversion section + Footer */
const {
  Button: _B4,
  Input: _I4,
  Badge: _BD4,
  Pill: _P4
} = window.SyfxDesignSystem_5de6e8;

/* ---------- 09 · Waitlist CTA (primary conversion, with success state) ---------- */
function WaitlistCTA({
  ctaRef
}) {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [done, setDone] = React.useState(false);
  const [position] = React.useState(() => 2847 + Math.floor(Math.random() * 400));
  const submit = e => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That doesn't look like a valid email. Try again.");
      return;
    }
    setError('');
    setDone(true);
  };
  const benefits = ['🏆 Founding Member Status', '💎 Elite Tier — free for 90 days', '📞 Direct line to the team'];
  return /*#__PURE__*/React.createElement("section", {
    ref: ctaRef,
    id: "early-access",
    "data-screen-label": "cta",
    style: {
      position: 'relative',
      background: 'var(--bg-primary)',
      padding: '110px 24px',
      overflow: 'hidden',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at center, rgba(0,229,160,0.08) 0%, transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 640,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(_BD4, null, "\u26A1 Early Access \u2014 Limited Spots"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 52,
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      color: 'var(--text-primary)',
      margin: '24px 0 0',
      textWrap: 'balance'
    }
  }, "Be first when", /*#__PURE__*/React.createElement("br", null), "Syfx goes live."), !done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--text-secondary)',
      margin: '22px 0 20px'
    }
  }, "Early access members get:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 32
    }
  }, benefits.map(b => /*#__PURE__*/React.createElement(_P4, {
    key: b
  }, b))), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      gap: 12,
      width: '100%',
      maxWidth: 480,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 240px'
    }
  }, /*#__PURE__*/React.createElement(_I4, {
    type: "email",
    placeholder: "Enter your email address",
    size: "lg",
    value: email,
    error: !!error,
    onChange: e => {
      setEmail(e.target.value);
      if (error) setError('');
    }
  })), /*#__PURE__*/React.createElement(_B4, {
    type: "submit",
    size: "lg"
  }, "Join the Waitlist")), /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    style: {
      minHeight: 18,
      marginTop: 8
    }
  }, error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--danger)'
    }
  }, error)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      margin: '6px 0 0'
    }
  }, "Join 3,200+ traders on the waitlist. No spam. Unsubscribe anytime.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--accent-mint-tint)',
      border: '2px solid var(--accent-mint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 26,
      color: 'var(--accent-mint)'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--accent-mint)',
      margin: '20px 0 0'
    }
  }, "You're on the list."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '12px 0 0',
      maxWidth: 420
    }
  }, "Welcome to Syfx. We'll email you the moment early access opens."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(_B4, {
    variant: "secondary",
    size: "md"
  }, "Share on X \u2192"), /*#__PURE__*/React.createElement(_B4, {
    variant: "secondary",
    size: "md"
  }, "Copy Link")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)',
      margin: '24px 0 0'
    }
  }, "Position: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-mint)',
      fontWeight: 700,
      fontFamily: 'var(--font-mono)'
    }
  }, "#", position.toLocaleString()), " in line"))));
}

/* ---------- 10 · Footer ---------- */
function Footer() {
  const socials = ['𝕏', '⎇', '✈', 'in'];
  const links = ['How It Works', 'Features', 'Markets', 'Join Waitlist'];
  const SocialBtn = ({
    children
  }) => {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("span", {
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        border: `1px solid ${h ? 'var(--accent-mint)' : 'var(--border)'}`,
        color: h ? 'var(--accent-mint)' : 'var(--text-secondary)',
        fontSize: 14,
        cursor: 'pointer',
        transition: 'border-color 150ms, color 150ms'
      }
    }, children);
  };
  const FLink = ({
    children
  }) => {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        fontSize: 14,
        color: h ? 'var(--accent-mint)' : 'var(--text-secondary)',
        textDecoration: 'none',
        transition: 'color 150ms'
      }
    }, children);
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border)',
      padding: '56px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: window.MAX,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 40
    },
    className: "syfx-grid-foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/syfx-mark.png",
    alt: "Syfx",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: 'var(--accent-mint)',
      letterSpacing: '-0.02em'
    }
  }, "Syfx")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      margin: '0 0 18px'
    }
  }, "Trade without Trust. Proven by Math."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, socials.map((s, i) => /*#__PURE__*/React.createElement(SocialBtn, {
    key: i
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 2
    }
  }, "Links"), links.map(l => /*#__PURE__*/React.createElement(FLink, {
    key: l
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 2
    }
  }, "Contact"), /*#__PURE__*/React.createElement(FLink, null, "github.com/MaxCybOps"), /*#__PURE__*/React.createElement(FLink, null, "@syfx_ai on X"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "Built from Nigeria \uD83C\uDDF3\uD83C\uDDEC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: window.MAX,
      margin: '40px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--border)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 Syfx. All rights reserved. \xB7 Privacy Policy \xB7 Terms of Service"));
}
Object.assign(window, {
  WaitlistCTA,
  Footer
});

/* ===== App.jsx ===== */
/* Syfx Waitlist — App shell composing all sections */
function App() {
  const ctaRef = React.useRef(null);
  const scrollToCTA = () => {
    const el = document.getElementById('early-access');
    const scroller = document.getElementById('syfx-scroll');
    if (el && scroller) scroller.scrollTo({
      top: el.offsetTop - 20,
      behavior: 'smooth'
    });
  };
  const {
    Nav,
    Hero,
    Problem,
    Solution,
    HowItWorks,
    Features,
    Markets,
    Credibility,
    WaitlistCTA,
    Footer
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    onJoin: scrollToCTA
  }), /*#__PURE__*/React.createElement(Hero, {
    onJoin: scrollToCTA
  }), /*#__PURE__*/React.createElement(Problem, null), /*#__PURE__*/React.createElement(Solution, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Markets, null), /*#__PURE__*/React.createElement(Credibility, null), /*#__PURE__*/React.createElement(WaitlistCTA, {
    ctaRef: ctaRef
  }), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/waitlist/waitlist.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.IconCircle = __ds_scope.IconCircle;

})();
