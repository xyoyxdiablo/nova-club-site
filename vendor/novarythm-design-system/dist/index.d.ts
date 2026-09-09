import * as react from 'react';
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'sm';
interface SharedProps {
    /** Visual weight. `primary` is filled (ink), `secondary` is outlined, `ghost` is text-only. */
    variant?: ButtonVariant;
    /** Compact sizing for dense layouts (tables, cards). */
    size?: ButtonSize;
    /**
     * Place this button on an inverted (dark) `Section`. Flips the polarity so
     * a `primary` button stays legible — never combine with a light surface.
     */
    inverse?: boolean;
    children: ReactNode;
}
type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
};
type ButtonLinkProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};
/**
 * NovaRythm CTA. Renders a `<button>` by default, or an `<a>` when `href` is
 * passed (e.g. `mailto:`, an anchor jump, an external link).
 */
declare const Button: react.ForwardRefExoticComponent<(ButtonProps | ButtonLinkProps) & react.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

type BadgeVariant = 'outline' | 'solid';
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** `outline` (default) is a hairline rectangle; `solid` is ink-filled — use sparingly, it's the loudest mark in the system. */
    variant?: BadgeVariant;
    /** Place on an inverted (dark) `Section`. */
    inverse?: boolean;
    children: ReactNode;
}
/**
 * A small uppercase mono label — reference codes ("NR-100 → NR-111"), status
 * words, section markers. Always square corners, never a colour signal.
 */
declare function Badge({ variant, inverse, className, children, ...rest }: BadgeProps): react.JSX.Element;

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Small mono label above the title — a reference code, a category. */
    eyebrow?: ReactNode;
    /** Card headline. Omit to build a fully custom body via `children` only. */
    title?: ReactNode;
    /** Lifts 2px with a soft shadow on hover — use for clickable/selectable cards, not static ones. */
    hoverable?: boolean;
    /** Pinned to the bottom of the card (price rows, a CTA) regardless of body length. */
    footer?: ReactNode;
    children?: ReactNode;
}
/**
 * The base surface for grouped content — product ranges, feature summaries,
 * pricing blocks. Square corners, hairline border, no drop shadow at rest.
 */
declare function Card({ eyebrow, title, hoverable, footer, className, children, ...rest }: CardProps): react.JSX.Element;

interface PriceTagProps extends HTMLAttributes<HTMLSpanElement> {
    /** The number or range, pre-formatted — e.g. `"24–30"`, `"1 300"`. Kept as a string so ranges and dashes stay exact. */
    value: string;
    /** Currency mark. Defaults to `€`, placed after the value (French convention). */
    currency?: string;
    /** Small caption after the value — e.g. `"HT / pc"`, `"TTC"`. */
    unit?: string;
    /** Word before the value — e.g. `"à partir de"`. */
    prefix?: string;
    /** Compact size for use inside table cells or dense rows. */
    size?: 'md' | 'sm';
}
/**
 * A price, always set in tabular mono digits so columns of prices align.
 * Never used for arbitrary numbers — this is specifically a price mark.
 */
declare function PriceTag({ value, currency, unit, prefix, size, className, ...rest }: PriceTagProps): react.JSX.Element;

interface TableColumn {
    /** Unique key, matched against each row's keys. */
    key: string;
    /** Header label. */
    label: ReactNode;
    /** Right-align the column — use for prices, quantities, anything numeric. */
    align?: 'left' | 'right';
}
interface TableProps {
    columns: TableColumn[];
    /** Each row is a plain object keyed by column `key`; values can be any renderable node (e.g. a `PriceTag`). */
    rows: Array<Record<string, ReactNode>>;
    /** Alternates row background — helps scanning on wide/dense tables. */
    zebra?: boolean;
    className?: string;
}
/**
 * A data table for spec sheets and price grids — every numeric column sets
 * tabular figures automatically so prices and quantities line up.
 */
declare function Table({ columns, rows, zebra, className }: TableProps): react.JSX.Element;

type SectionTone = 'default' | 'soft' | 'inverse';
interface SectionProps extends HTMLAttributes<HTMLElement> {
    /**
     * `default` (white), `soft` (light grey), `inverse` (ink — the brand's
     * "atelier" band). Alternate tones between stacked sections; that
     * alternation, not colour, is what carries the page's rhythm.
     */
    tone?: SectionTone;
    /** Max-width of the inner content column, e.g. `"880px"`. Defaults to 960px. */
    containerWidth?: string;
    children: ReactNode;
}
/**
 * A full-bleed page section with an inner reading column. This is the
 * primary layout building block — stack several with alternating `tone`.
 */
declare function Section({ tone, containerWidth, style, className, children, ...rest }: SectionProps): react.JSX.Element;

type HeadingLevel = 1 | 2 | 3;
type HeadingVoice = 'display' | 'ui';
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    /** Maps to `<h1>`/`<h2>`/`<h3>` and the matching type-scale step. */
    level?: HeadingLevel;
    /**
     * `display` (default) sets EB Garamond — the brand's editorial voice.
     * `ui` sets bold Inter — for structural/functional headings (a form
     * section, a table group) where the serif would read as too emotive.
     */
    voice?: HeadingVoice;
    /** Italicises the display face — reserve for one thesis line per page, not routine headings. */
    italic?: boolean;
    children: ReactNode;
}
declare function Heading({ level, voice, italic, className, children, ...rest }: HeadingProps): react.JSX.Element;
interface EyebrowProps extends HTMLAttributes<HTMLDivElement> {
    /** Optional leading marker — a section number (`"§03"`), a step count. */
    marker?: ReactNode;
    children: ReactNode;
}
/**
 * The small mono label that precedes a `Heading` — "§03 La gamme club".
 * Use the marker only when sections genuinely have a fixed reading order.
 */
declare function Eyebrow({ marker, className, children, ...rest }: EyebrowProps): react.JSX.Element;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
    /** Mono uppercase field label, rendered above the input. */
    label?: string;
    /** Small caption below the input — helper text or an inline error. */
    hint?: string;
}
/**
 * A labelled text field. Square corners, hairline border that turns solid
 * ink on focus — no colour, no glow.
 */
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

export { Badge, type BadgeProps, type BadgeVariant, Button, type ButtonLinkProps, type ButtonProps, type ButtonSize, type ButtonVariant, Card, type CardProps, Eyebrow, type EyebrowProps, Heading, type HeadingLevel, type HeadingProps, type HeadingVoice, Input, type InputProps, PriceTag, type PriceTagProps, Section, type SectionProps, type SectionTone, Table, type TableColumn, type TableProps };
