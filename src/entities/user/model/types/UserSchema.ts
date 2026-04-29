import type { AuthProvidersType } from "@/features/login/lib/config/auth";

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