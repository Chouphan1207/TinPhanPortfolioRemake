export const AuthProviders = {
    LOCAL: "LOCAL",
    GOOGLE: "GOOGLE",
} as const;

export type AuthProviderType = typeof AuthProviders[keyof typeof AuthProviders];