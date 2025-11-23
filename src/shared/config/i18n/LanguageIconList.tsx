import type { supportedLngs } from "./i18n";
import EnglishIcon from "@/shared/assets/icons/english.svg?react";
import VietnamIcon from "@/shared/assets/icons/vietnam.svg?react";

export type SupportedLngType = (typeof supportedLngs)[number];

type LanguageIconListType = Record<
  SupportedLngType,
  React.FC<React.SVGProps<SVGSVGElement>>
>;

export const LanguageIconList: LanguageIconListType = {
  en: EnglishIcon,
  vi: VietnamIcon,
};
