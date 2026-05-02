import styles from "./HamburgerMenu.module.scss";

interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const HamburgerMenu = ({ isOpen, onToggle }: HamburgerMenuProps) => {
  return (
    <button 
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      onClick={onToggle}
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};
