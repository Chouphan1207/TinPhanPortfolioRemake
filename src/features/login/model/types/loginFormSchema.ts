import type { AuthMethodType } from "../../lib/config/auth";

export interface LoginFormSchema {
  email?: string;
  phone?: string;
  password: string;
  isLoading: boolean;
  error?: string;
  method: AuthMethodType;
}