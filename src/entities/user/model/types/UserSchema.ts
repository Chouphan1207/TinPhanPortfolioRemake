import type { AuthProviderType } from "@/shared/config/auth/auth";

export interface User {
    id: string;
    email?: string;
    phone?: string;
    isVerified?: boolean;
    provider: AuthProviderType,
}
export interface UserSchema {
    authData?: User;
}