export interface NgxAuthFirebaseUIConfig {
    authGuardFallbackURL?: string;
    authGuardLoggedInURL?: string;
    enableFirestoreSync?: boolean;
    toastMessageOnAuthSuccess?: boolean;
    toastMessageOnAuthError?: boolean;
    passwordMaxLength?: number;
    passwordMinLength?: number;
    nameMaxLength?: number;
    nameMinLength?: number;
    guardProtectedRoutesUntilEmailIsVerified?: boolean;
    enableEmailVerification?: boolean;
    useRawUserCredential?: boolean;
}
export declare const defaultAuthFirebaseUIConfig: NgxAuthFirebaseUIConfig;
export declare function ngxAuthFirebaseUIConfigFactory(userProvidedConfig: NgxAuthFirebaseUIConfig): NgxAuthFirebaseUIConfig;
