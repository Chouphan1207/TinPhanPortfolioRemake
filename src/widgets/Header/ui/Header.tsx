import Logo from "@/shared/assets/icons/Logo.png";
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
        <img src={Logo} alt="Logo" className={styles.logo} height={50} />
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
