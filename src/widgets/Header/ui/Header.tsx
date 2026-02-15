const Logo = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="24" stroke="#222" strokeWidth="2" fill="#fff" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy=".3em"
      fontSize="16"
      fill="#222"
    >
      Logo
    </text>
  </svg>
);
import MapPin from "@/shared/assets/icons/MapPin.svg?react";
import SearchIcon from "@/shared/assets/icons/search.svg?react";
import UserIcon from "@/shared/assets/icons/Users.svg?react";

import styles from "./Header.module.scss";
import { AppIcon, Button, Input } from "@/shared/ui";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
import { useNavigate } from "react-router-dom";
import { routePaths } from "@/shared/config";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleLoginClick = () => {
    navigate(routePaths.login);
  };

  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <span className={styles.logo}>
          <Logo />
        </span>
        <Button theme="ghost">
          <AppIcon Icon={MapPin} />
          <span>VietNam</span>
        </Button>
      </div>
      <div className={styles.section}>
        <Input
          rounded
          placeholder={t("header.searchBy")}
          Icon={<AppIcon size={18} Icon={SearchIcon} theme="background" />}
        />
      </div>
      <div className={styles.section}>
        <Button theme="secondary">{t("header.cart")}</Button>

        <Button theme="outline" onClick={handleLoginClick}>
          <AppIcon Icon={UserIcon} />
          <span>{t("header.login")}</span>
        </Button>

        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
