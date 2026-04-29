import styles from "./Grid.module.scss";

export interface BentoItem {
  id: string;
  size: "small" | "medium" | "large" | "wide" | "tall";
  title: string;
  description: string;
}

interface BentoGridProps {
  items: BentoItem[];
}

export function BentoGrid({ items }: BentoGridProps) {
  const getItemClass = (size: string) => {
    switch (size) {
      case "small":
        return styles.bentoItemSmall;
      case "medium":
        return styles.bentoItemMedium;
      case "large":
        return styles.bentoItemLarge;
      case "wide":
        return styles.bentoItemWide;
      case "tall":
        return styles.bentoItemTall;
      default:
        return styles.bentoItemMedium;
    }
  };

  return (
    <section className={styles.gridSection}>
      <div className={styles.bentoGrid}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.bentoItem} ${getItemClass(item.size)}`}
            data-size={item.size}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
