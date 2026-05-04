import React, {
  forwardRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/shared/lib";
import style from "./Input.module.scss";
import { Button } from "../Button/Button";
import HideIcon from "@/shared/assets/icons/Hide.svg?react";
import ShowIcon from "@/shared/assets/icons/Show.svg?react";

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
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(false);

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

  // Preserve native onChange if provided in rest (for consumers using native signature)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    if (typeof (rest as any).onChange === "function") {
      (rest as any).onChange(e);
    }
  };

  const toggleShowPassword = () => setShowPassword((s) => !s);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    if (typeof onFocus === "function") onFocus(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    if (typeof onBlur === "function") onBlur(e);
  };

  const containerClass = cn(style.inputContainer, className, {
    [style.rounded]: rounded,
    [style.disabled]: disabled,
    [style.focus]: focus,
    [style.error]: error,
  });

  const inputClass = cn(style.input, {
    [style.disabled]: disabled,
    [style.error]: error,
  });

  // Only pass value when controlled; allow uncontrolled via defaultValue
  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    ...rest,
    disabled,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    type: showPassword && type === "password" ? "text" : type,
    className: inputClass,
    "aria-invalid": error || undefined,
  };

  if (value !== undefined) inputProps.value = value;
  if (defaultValue !== undefined) inputProps.defaultValue = defaultValue;

  return (
    <div>
      {label && (
        <label className={cn(style.label, { [style.error]: error })}>
          {label}
        </label>
      )}
      <div className={containerClass}>
        {Icon}
        <input {...inputProps} />
        {type === "password" && (
          <Button
            theme="ghost"
            type="button"
            className={style.toggleVisibility}
            onClick={toggleShowPassword}
            disabled={disabled}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <HideIcon /> : <ShowIcon />}
          </Button>
        )}
      </div>
    </div>
  );
});

Input.displayName = "Input";
export default Input;
