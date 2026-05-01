"use client";

import React from "react";
import styles from "./Typography.module.scss";
import type { FontConfig } from "@/shared/assets/fonts/fonts.types";

export interface TypographyProps extends FontConfig {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  as: Component = "span",
  family,
  weight,
  size,
  lineHeight,
  preset,
  children,
  className = "",
}) => {
  const getTypographyClasses = (): string => {
    const classes: string[] = [];

    // Apply preset if specified
    if (preset) {
      classes.push(styles[`preset-${preset}`]);
    } else {
      // Apply individual styles
      if (family) classes.push(styles[`font-${family}`]);
      if (weight) classes.push(styles[`font-weight-${weight}`]);
      if (size) classes.push(styles[`text-${size}`]);
      if (lineHeight) classes.push(styles[`leading-${lineHeight}`]);
    }

    return classes.join(" ");
  };

  const combinedClassName = `${getTypographyClasses()} ${className}`.trim();

  return <Component className={combinedClassName}>{children}</Component>;
};

export default Typography;
