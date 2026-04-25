import type { AuthProvidersType } from "@/shared/config/auth/auth";

export interface User {
    id: string;
    email?: string;
    phone?: string;
    isVerified?: boolean;
    provider: AuthProvidersType,
}
export interface UserSchema {
    authData?: User;
}