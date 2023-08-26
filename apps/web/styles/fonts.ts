import localFont from "next/font/local";

export const pretendard = localFont({
  src: "./Pretendard-Regular.woff",
  variable: "--font-pretendard",
  weight: "600",
  display: "swap",
});

export const fontMapper = {
  "font-pretendard": pretendard.variable,
} as Record<string, string>;
