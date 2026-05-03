import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

import styles from "./SidebarNavigation.module.scss";

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SidebarNavigation = ({ isOpen, onClose }: SidebarNavigationProps) => {
  const navLinks = [
    "HOME",
    "ABOUT", 
    "MUSICAL STYLE",
    "GALLERY",
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      
      {/* Sidebar */}
      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Navigation</h2>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close navigation"
          >
            ×
          </button>
        </div>
        
        <div className={styles.sidebarContent}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className={styles.navLink}
                  onClick={onClose}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          
          <div className={styles.controls}>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </>
  );
};
