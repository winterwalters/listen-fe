/** Brand palette — hex without # (Mantine accepts either form in color tuples). */
export const PALETTE_SWATCHES = [
  { key: "onyx", name: "Onyx", hex: "141414" },
  { key: "dustyMauve", name: "Dusty Mauve", hex: "9c7a97" },
  { key: "vividRoyal", name: "Vivid Royal", hex: "1b0c9f" },
  { key: "ashGrey", name: "Ash Grey", hex: "abc8c0" },
  { key: "vintageBerry", name: "Vintage Berry", hex: "922d50" },
] as const;

export type PaletteColorKey = (typeof PALETTE_SWATCHES)[number]["key"];

/** Solid brand swatches as `#rrggbb` for layout and inline styles. */
export const BRAND = Object.fromEntries(
  PALETTE_SWATCHES.map(({ key, hex }) => [key, `#${hex}`]),
) as Record<PaletteColorKey, string>;

export type ColorSchemeMode = "light" | "dark";

function normalizeHex(hex: string): string {
  const h = hex.replace(/^#/, "");
  if (h.length !== 6) throw new Error(`Invalid hex: ${hex}`);
  return h;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = normalizeHex(hex);
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  return `#${[clamp(r), clamp(g), clamp(b)]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("")}`;
}

function mixRgb(
  a: { r: number; g: number; b: number },
  b: { r: number; g: number; b: number },
  t: number,
): string {
  const lerp = (x: number, y: number) => x + (y - x) * t;
  return rgbToHex(lerp(a.r, b.r), lerp(a.g, b.g), lerp(a.b, b.b));
}

/** Mantine expects each named color as a light→dark ramp (index 0 = lightest). */
export function mantineShadeScale(baseHex: string): readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
] {
  const base = hexToRgb(baseHex);
  const white = { r: 255, g: 255, b: 255 };
  const black = { r: 0, g: 0, b: 0 };
  return [
    mixRgb(base, white, 0.93),
    mixRgb(base, white, 0.82),
    mixRgb(base, white, 0.68),
    mixRgb(base, white, 0.52),
    mixRgb(base, white, 0.36),
    mixRgb(base, white, 0.2),
    rgbToHex(base.r, base.g, base.b),
    mixRgb(base, black, 0.22),
    mixRgb(base, black, 0.4),
    mixRgb(base, black, 0.55),
  ] as const;
}

export function paletteMantineColors(): Record<
  PaletteColorKey,
  ReturnType<typeof mantineShadeScale>
> {
  return Object.fromEntries(
    PALETTE_SWATCHES.map(({ key, hex }) => [key, mantineShadeScale(hex)]),
  ) as Record<PaletteColorKey, ReturnType<typeof mantineShadeScale>>;
}

export function hexAlpha(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** App shell surfaces and chrome borders derived from the brand palette. */
export function layoutSurfaces(scheme: ColorSchemeMode) {
  const { onyx, ashGrey, dustyMauve, vividRoyal, vintageBerry } = BRAND;
  const white = { r: 255, g: 255, b: 255 };

  if (scheme === "dark") {
    return {
      root: onyx,
      header: mixRgb(hexToRgb(onyx), white, 0.04),
      navbar: mixRgb(hexToRgb(onyx), white, 0.025),
      main: onyx,
      border: hexAlpha(dustyMauve, 0.24),
      headerAccent: hexAlpha(vintageBerry, 0.55),
    };
  }

  return {
    root: mixRgb(hexToRgb(ashGrey), white, 0.84),
    header: mixRgb(hexToRgb(ashGrey), white, 0.78),
    navbar: mixRgb(hexToRgb(ashGrey), white, 0.74),
    main: mixRgb(hexToRgb(ashGrey), white, 0.86),
    border: hexAlpha(vividRoyal, 0.12),
    headerAccent: hexAlpha(vividRoyal, 0.28),
  };
}
