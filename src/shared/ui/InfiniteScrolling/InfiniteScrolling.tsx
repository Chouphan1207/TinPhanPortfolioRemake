import { toolsData } from "@/entities/tool";
import styles from "./InfiniteScrolling.module.scss";

export default function InfiniteScrollTools() {
  return (
    <div className={styles.infiniteScrollContainer}>
      {/* Side gradient fades */}
      <div className={styles.leftFade} />
      <div className={styles.rightFade} />

      {/* Infinite scroll row */}
      <div className={styles.scrollRow}>
        {[...toolsData, ...toolsData].map((tool, index) => (
          <div
            key={index}
            className={styles.toolCard}
          >
            <img src={tool.icon} alt={tool.name} className={styles.toolIcon} />
            <p className={styles.toolName}>{tool.name}</p>
            <span className={styles.toolDescription}>{tool.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
