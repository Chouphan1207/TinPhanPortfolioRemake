import type { StateSchema } from "@/app/store";
import { AuthMethod } from "../../../lib/config/auth";

export const selectLoginMethod = (state: StateSchema) => state.loginForm?.method ?? AuthMethod.EMAIL;