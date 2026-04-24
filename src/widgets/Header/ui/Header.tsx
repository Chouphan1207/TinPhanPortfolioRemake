import Logo from "@/shared/assets/icons/Logo.png";
import MapPin from "@/shared/assets/icons/MapPin.svg?react";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";
import UserIcon from "@/shared/assets/icons/Users.svg?react";

import styles from "./Header.module.scss";
import { AppIcon, Button, Input } from "@/shared/ui";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import { useNavigate } from "react-router-dom";
import { routePaths } from "@/shared/config";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";

export const Header = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleLoginClick = () => {
    navigate(routePaths.login);
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.section}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Logo} alt="Logo" className={styles.logo} height={50} />
        <div className={styles.section}>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
