import React, { forwardRef, type ChangeEvent, type FocusEvent, type InputHTMLAttributes, type ReactNode } from "react";
import style from "./Input.module.scss";
import { cn } from "@/shared/lib";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

export interface InputProps extends HTMLInputProps {
  className?: string;
  disabled?: boolean;
  rounded?: boolean;
  Icon?: ReactNode;
  error?: boolean;
  label?: string;
  onChange?: (value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    disabled = false,
    rounded = false,
    Icon,
    onChange,
    type = "text",
    value,
    defaultValue,
    error = false,
    label,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    if (typeof (rest as any).onChange === "function") (rest as any).onChange(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (typeof onFocus === "function") onFocus(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (typeof onBlur === "function") onBlur(e);
  };

  // Build inputProps WITHOUT ref
  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    ...rest,
    disabled,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    type,
    className: cn(style.input, { [style.disabled]: disabled, [style.error]: error }),
    "aria-invalid": error || undefined,
  };

  if (value !== undefined) inputProps.value = value;
  if (defaultValue !== undefined) inputProps.defaultValue = defaultValue;

  return (
    <div className={cn(style.inputContainer, className, { [style.rounded]: rounded, [style.disabled]: disabled, [style.error]: error })}>
      {label && <label className={cn(style.label, { [style.error]: error })}>{label}</label>}
      <div>
        {Icon}
        {/* Pass ref directly here — do NOT include ref inside inputProps */}
        <input ref={ref} {...inputProps} />
      </div>
    </div>
  );
});

Input.displayName = "Input";
export default Input;
