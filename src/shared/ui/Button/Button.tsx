import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";
import { cn } from "@/shared/lib";

type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonForm = "pill" | "rounded" | "circle";
type ButtonTheme = "primary" | "secondary" | "tertiary" | "outline" | "ghost" | "crush" | "btnHover";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: ButtonSize;
  form?: ButtonForm;
  theme?: ButtonTheme;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    size = "sm",
    theme = "primary",
    form = "pill",
    disabled = false,
    ...rest
  } = props;
  return (
    <button
      {...rest}
      disabled={disabled}
      className={cn(
        styles.button,
        className,
        styles[size],
        styles[theme],
        styles[form],
        {
          [styles.disabled]: disabled,
        },
      )}
    >
      {children}
    </button>
  );
};
