import styles from "./Spinner.module.scss";

export const Spinner = () => {
  return (
        <div className={styles.container}>
      <div className={styles.plate}>
        <div className={styles.black}>
          <div className={styles.border}>
            <div className={styles.white}>
              <div className={styles.center} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.player}>
        <div className={styles.rect} />
        <div className={styles.circ} />
      </div>
    </div>
  );
};
