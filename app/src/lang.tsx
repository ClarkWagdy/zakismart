"use client";
import { createContext, useContext } from "react";

export type Lang = "en" | "ar";

export const LangContext = createContext<Lang>("en");

export const useLang = () => useContext(LangContext);

// L("English text", "النص العربي") -> returns the one for the active language
export function useL() {
  const lang = useLang();
  return <T,>(en: T, ar: T): T => (lang === "ar" ? ar : en);
}
