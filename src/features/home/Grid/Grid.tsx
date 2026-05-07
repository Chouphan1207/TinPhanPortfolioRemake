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

const sizeClassMap: Record<BentoItem["size"], string> = {
  small: styles.bentoItemSmall,
  medium: styles.bentoItemMedium,
  large: styles.bentoItemLarge,
  wide: styles.bentoItemWide,
  tall: styles.bentoItemTall,
};

export function BentoGrid({ items }: BentoGridProps) {
  return (
    <section className={styles.gridSection}>
      <div className={styles.bentoGrid}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.bentoItem} ${sizeClassMap[item.size]}`}
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
