import { forwardRef, useId } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/components/Button/Button.tsx
var Button = forwardRef(
  ({ variant = "primary", size = "md", inverse = false, className, children, ...rest }, ref) => {
    const classes = [
      "nv-button",
      `nv-button--${variant}`,
      size === "sm" ? "nv-button--sm" : "",
      inverse ? "nv-button--inverse" : "",
      className ?? ""
    ].filter(Boolean).join(" ");
    if ("href" in rest && rest.href !== void 0) {
      const { href, ...anchorRest } = rest;
      return /* @__PURE__ */ jsx("a", { ref, href, className: classes, ...anchorRest, children });
    }
    return /* @__PURE__ */ jsx("button", { ref, className: classes, ...rest, children });
  }
);
Button.displayName = "Button";
function Badge({ variant = "outline", inverse = false, className, children, ...rest }) {
  const classes = [
    "nv-badge",
    variant === "solid" ? "nv-badge--solid" : "",
    inverse ? "nv-badge--inverse" : "",
    className ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("span", { className: classes, ...rest, children });
}
function Card({ eyebrow, title, hoverable = false, footer, className, children, ...rest }) {
  const classes = ["nv-card", hoverable ? "nv-card--hover" : "", className ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs("div", { className: classes, ...rest, children: [
    eyebrow && /* @__PURE__ */ jsx("div", { className: "nv-card__eyebrow", children: eyebrow }),
    title && /* @__PURE__ */ jsx("h3", { className: "nv-card__title", children: title }),
    children && /* @__PURE__ */ jsx("div", { className: "nv-card__body", children }),
    footer && /* @__PURE__ */ jsx("div", { className: "nv-card__footer", children: footer })
  ] });
}
function PriceTag({ value, currency = "\u20AC", unit, prefix, size = "md", className, ...rest }) {
  const classes = ["nv-price", size === "sm" ? "nv-price--sm" : "", className ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs("span", { className: classes, ...rest, children: [
    prefix && /* @__PURE__ */ jsx("span", { className: "nv-price__prefix", children: prefix }),
    /* @__PURE__ */ jsxs("span", { className: "nv-price__value", children: [
      value,
      currency && `\xA0${currency}`
    ] }),
    unit && /* @__PURE__ */ jsx("span", { className: "nv-price__unit", children: unit })
  ] });
}
function Table({ columns, rows, zebra = false, className }) {
  const classes = ["nv-table", zebra ? "nv-table--zebra" : "", className ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs("table", { className: classes, children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: columns.map((col) => /* @__PURE__ */ jsx("th", { "data-align": col.align === "right" ? "right" : void 0, children: col.label }, col.key)) }) }),
    /* @__PURE__ */ jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsx("tr", { children: columns.map((col) => /* @__PURE__ */ jsx("td", { "data-align": col.align === "right" ? "right" : void 0, children: row[col.key] }, col.key)) }, i)) })
  ] });
}
function Section({ tone = "default", containerWidth, style, className, children, ...rest }) {
  const classes = ["nv-section", tone !== "default" ? `nv-section--${tone}` : "", className ?? ""].filter(Boolean).join(" ");
  const innerStyle = containerWidth ? { "--nv-container": containerWidth } : void 0;
  return /* @__PURE__ */ jsx("section", { className: classes, style, ...rest, children: /* @__PURE__ */ jsx("div", { className: "nv-section__inner", style: innerStyle, children }) });
}
function Heading({ level = 2, voice = "display", italic = false, className, children, ...rest }) {
  const Tag = `h${level}`;
  const classes = [
    "nv-heading",
    `nv-heading--${level}`,
    voice === "ui" ? "nv-heading--ui" : "",
    italic ? "nv-heading--italic" : "",
    className ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(Tag, { className: classes, ...rest, children });
}
function Eyebrow({ marker, className, children, ...rest }) {
  return /* @__PURE__ */ jsxs("div", { className: ["nv-eyebrow", className ?? ""].filter(Boolean).join(" "), ...rest, children: [
    marker && /* @__PURE__ */ jsx("span", { className: "nv-eyebrow__marker", children: marker }),
    /* @__PURE__ */ jsx("span", { children })
  ] });
}
var Input = forwardRef(({ label, hint, className, ...rest }, ref) => {
  const generatedId = useId();
  const inputId = rest.name ?? generatedId;
  return /* @__PURE__ */ jsxs("div", { className: "nv-field", children: [
    label && /* @__PURE__ */ jsx("label", { className: "nv-field__label", htmlFor: inputId, children: label }),
    /* @__PURE__ */ jsx("input", { ref, id: inputId, className: ["nv-input", className ?? ""].filter(Boolean).join(" "), ...rest }),
    hint && /* @__PURE__ */ jsx("span", { className: "nv-field__hint", children: hint })
  ] });
});
Input.displayName = "Input";

export { Badge, Button, Card, Eyebrow, Heading, Input, PriceTag, Section, Table };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map