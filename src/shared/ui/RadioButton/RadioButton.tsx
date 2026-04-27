import React from 'react';
import styles from './RadioButton.module.scss';

export const RadioButton = () => {
  return (
    <div className={styles.wheelSelector}>
      <div className={styles.hintPop}>TAP TO SPIN</div>
      <div className={styles.radioInput}>
        <label htmlFor="value-2" className={styles.nextTrigger} id="trigger-for-1" />
        <label htmlFor="value-3" className={styles.nextTrigger} id="trigger-for-2" />
        <label htmlFor="value-1" className={styles.nextTrigger} id="trigger-for-3" />
        <div className={styles.glassOverlay} />

        <input defaultValue="value-1" name="value-radio" id="value-1" type="radio" defaultChecked />
        <label
          className={styles.wheelLabel}
          htmlFor="value-1"
          style={{ '--angle': '-30deg' } as React.CSSProperties}
        >
          <span className={styles.num}>01</span>
          <span className={styles.label}>PRIME</span>
        </label>

        <input defaultValue="value-2" name="value-radio" id="value-2" type="radio" />
        <label
          className={styles.wheelLabel}
          htmlFor="value-2"
          style={{ '--angle': '0deg' } as React.CSSProperties}
        >
          <span className={styles.num}>02</span>
          <span className={styles.label}>SELECT</span>
        </label>

        <input defaultValue="value-3" name="value-radio" id="value-3" type="radio" />
        <label
          className={styles.wheelLabel}
          htmlFor="value-3"
          style={{ '--angle': '30deg' } as React.CSSProperties}
        >
          <span className={styles.num}>03</span>
          <span className={styles.label}>ULTRA</span>
        </label>
      </div>
    </div>
  )
}