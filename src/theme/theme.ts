import { createTheme } from "@shopify/restyle";

const palette = {
  black: "#0B0B0B",
  white: "#F0F2F3",
  fieryRed: "#FF4B4B",
  midnightBlack: "#1B1B1B",
  charcoalGrey: "#302E2D",
  stoneGrey: "#5C5C5C",
  pureWhite: "#FFFFFF",
};

export const theme = createTheme({
  colors: {
    background: palette.midnightBlack,
    primary: palette.fieryRed,
    text: palette.pureWhite,
    gray1: palette.charcoalGrey,
    gray2: palette.stoneGrey,
    ...palette,
  },
  spacing: {
    s2: 2,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
    padding: 16,
  },
  textVariants: {
    defaults: {
      color: "text",
      fontFamily: "PoppinsRegular",
      fontSize: 16,
      lineHeight: 18, //geralmente 2 pixel acima do fontsize
    },
    title28: {
      fontSize: 28,
      fontFamily: "PoppinsSemiBold",
      lineHeight: 30, //geralmente 2 pixel acima do fontsize
    },
    title22: {
      fontSize: 22,
      fontFamily: "PoppinsSemiBold",
      lineHeight: 24, //geralmente 2 pixel acima do fontsize
    },
    title16: {
      fontSize: 16,
      fontFamily: "PoppinsSemiBold",
      lineHeight: 18, //geralmente 2 pixel acima do fontsize
    },
    text18: {
      fontSize: 18,
      lineHeight: 20, //geralmente 2 pixel acima do fontsize
    },
    text16: {
      fontSize: 16,
      lineHeight: 18, //geralmente 2 pixel acima do fontsize
    },
    text14: {
      fontSize: 14,
      lineHeight: 16, //geralmente 2 pixel acima do fontsize
    },
    text12: {
      fontSize: 12,
      lineHeight: 14, //geralmente 2 pixel acima do fontsize
    },
  },
  borderRadii: {
    default: 16,
    rounded: 500,
  },
  boxShadows: {
    primary: "3px 3px 10px 3px rgba(255, 75, 75, 0.4)",
  },
});

export type Theme = typeof theme;
export type ThemeColor = keyof Theme["colors"];
