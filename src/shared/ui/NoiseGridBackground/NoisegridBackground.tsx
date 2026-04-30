"use client";

import React from "react";
import styles from "./NoiseGridBackground.module.scss";

interface NoiseGridBackgroundProps {
  text?: string;
  showText?: boolean;
}

const NoiseGridBackground: React.FC<NoiseGridBackgroundProps> = ({
  text = "Instant copywriting",
  showText = true,
}) => {
  return (
    <div className={styles.container}>
      {/* Noise texture overlay */}
      <div className={styles.noise} />

      {/* Centered text */}
      {showText && <h1 className={styles.text}>{text}</h1>}
    </div>
  );
};

export default NoiseGridBackground;
