import {
  LanguageIconList,
  type SupportedLngType,
} from "@/shared/config/i18n/LanguageIconList";

import { AppIcon, Button } from "@/shared/ui";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLngType;

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "vi" : "en");
  };
  return (
    <Button theme="ghost" onClick={toggleLanguage}>
      <AppIcon Icon={LanguageIconList[currentLanguage]} />
    </Button>
  );
};
