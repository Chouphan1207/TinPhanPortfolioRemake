import { useState } from "react";
import Logo from "@/shared/assets/icons/Logo.png";

import styles from "./Header.module.scss";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import { SidebarNavigation } from "./SidebarNavigation/SidebarNavigation";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    "HOME",
    "ABOUT", 
    "MUSICAL STYLE",
    "GALLERY",
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <img src={Logo} alt="Logo" className={styles.logo} height={50} />
        </div>
        
        {/* Desktop Navigation */}
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
        
        {/* Desktop Controls */}
        <div className={styles.controlsSection}>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        
        {/* Mobile Hamburger Menu */}
        <HamburgerMenu isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      </header>
      
      {/* Mobile Sidebar Navigation */}
      <SidebarNavigation isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};
