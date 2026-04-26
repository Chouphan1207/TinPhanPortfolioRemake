import Logo from "@/shared/assets/icons/Logo.png";

import styles from "./Header.module.scss";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";

export const Header = () => {
  const navLinks = [
    "HOME",
    "ABOUT", 
    "MUSICAL STYLE",
    "GALLERY",

  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src={Logo} alt="Logo" className={styles.logo} height={50} />
      </div>
      <nav className={styles.navSection}>
        {navLinks.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase().replace(/ /g, "-")}`} 
            className={styles.navLink}
          >
            {link}
          </a>
        ))}
      </nav>
      <div className={styles.controlsSection}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
