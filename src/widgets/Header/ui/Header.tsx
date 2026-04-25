import Logo from "@/shared/assets/icons/Logo.png";

import styles from "./Header.module.scss";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";

export const Header = () => {
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
