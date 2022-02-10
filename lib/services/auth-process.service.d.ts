import '@firebase/auth';
import { EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { ICredentials, ISignInProcess, ISignUpProcess, NgxAuthFirebaseUIConfig } from '../interfaces';
import { FirestoreSyncService } from './firestore-sync.service';
import UserCredential = firebase.auth.UserCredential;
import * as i0 from "@angular/core";
export declare const facebookAuthProvider: firebase.auth.FacebookAuthProvider;
export declare const googleAuthProvider: firebase.auth.GoogleAuthProvider;
export declare const appleAuthProvider: firebase.auth.OAuthProvider;
export declare const twitterAuthProvider: firebase.auth.TwitterAuthProvider;
export declare const githubAuthProvider: firebase.auth.GithubAuthProvider;
export declare const microsoftAuthProvider: firebase.auth.OAuthProvider;
export declare const yahooAuthProvider: firebase.auth.OAuthProvider;
export declare enum AuthProvider {
    ALL = "all",
    ANONYMOUS = "anonymous",
    EmailAndPassword = "firebase",
    Google = "google",
    Apple = "apple",
    Facebook = "facebook",
    Twitter = "twitter",
    Github = "github",
    Microsoft = "microsoft",
    Yahoo = "yahoo",
    PhoneNumber = "phoneNumber"
}
export declare class AuthProcessService implements ISignInProcess, ISignUpProcess {
    afa: AngularFireAuth;
    config: NgxAuthFirebaseUIConfig;
    private snackBar;
    private fireStoreService;
    private matSnackBarConfig;
    onSuccessEmitter: EventEmitter<any>;
    onErrorEmitter: EventEmitter<any>;
    private _user$;
    get user$(): Observable<firebase.User | null>;
    /**
     * @deprecated access via user$ asynchronously instead
     */
    user: firebase.User;
    messageOnAuthSuccess: string;
    messageOnAuthError: string;
    emailConfirmationSent: boolean;
    emailToConfirm: string;
    constructor(afa: AngularFireAuth, config: NgxAuthFirebaseUIConfig, snackBar: MatSnackBar, fireStoreService: FirestoreSyncService, matSnackBarConfig: MatSnackBarConfig);
    listenToUserEvents(): void;
    /**
     * Reset the password of the ngx-auth-firebaseui-user via email
     *
     * @param email - the email to reset
     */
    resetPassword(email: string): Promise<void>;
    /**
     * General sign in mechanism to authenticate the users with a firebase project
     * using a traditional way, via username and password or by using an authentication provider
     * like google, facebook, twitter and github
     *
     * @param provider - the provider to authenticate with (google, facebook, twitter, github)
     * @param credentials optional email and password
     */
    signInWith(provider: AuthProvider, credentials?: ICredentials): Promise<void>;
    /**
     * Sign up new users via email and password.
     * After that the ngx-auth-firebaseui-user should verify and confirm an email sent via the firebase
     *
     * @param displayName - the displayName if the new ngx-auth-firebaseui-user
     * @param credentials email and password
     * @returns -
     */
    signUp(displayName: string, credentials: ICredentials): Promise<void>;
    sendNewVerificationEmail(): Promise<void | never>;
    signOut(): Promise<void>;
    /**
     * Update the profile (name + photo url) of the authenticated ngx-auth-firebaseui-user in the
     * firebase authentication feature (not in firestore)
     *
     * @param name - the new name of the authenticated ngx-auth-firebaseui-user
     * @param photoURL - the new photo url of the authenticated ngx-auth-firebaseui-user
     * @returns -
     */
    updateProfile(name: string, photoURL: string): Promise<void>;
    parseUserInfo(user: firebase.User): firebase.UserInfo;
    getUserPhotoUrl(): Observable<string | null>;
    getPhotoPath(image: string): string;
    signInWithPhoneNumber(): void;
    handleSuccess(userCredential: UserCredential): Promise<void>;
    handleError(error: any): void;
    reloadUserInfo(): import("rxjs").Subscription;
    getMessageOnAuthError(error: any): any;
    showToast(message: string): void;
    showErrorToast(error: any): void;
    notifyError(error: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthProcessService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthProcessService>;
}
