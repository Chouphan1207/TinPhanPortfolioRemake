import type { UserSchema } from "@/entities/user";
import type { LoginFormSchema } from "@/features/login/model/types/loginFormSchema";

export interface StateSchema {
  user: UserSchema;
  loginForm: LoginFormSchema;
}