import { toolsData } from "@/entities/tool";
import styles from "./InfiniteScrolling.module.scss";

export function InfiniteScrollTools() {
  const duplicatedTools = [...toolsData, ...toolsData, ...toolsData, ...toolsData];

  return (
    <div className={styles.infiniteScrollContainer}>
      <div className={styles.leftFade} />
      <div className={styles.rightFade} />

      <div className={styles.scrollRow}>
        {duplicatedTools.map((tool, index) => (
          <div key={`${tool.name}-${index}`} className={styles.toolCard}>
            <img src={tool.icon} alt={tool.name} className={styles.toolIcon} />
            <p className={styles.toolName}>{tool.name}</p>
            <span className={styles.toolDescription}>{tool.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
