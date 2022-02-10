import { EventEmitter } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormControl, FormGroup } from "@angular/forms";
import { MatFormFieldAppearance } from "@angular/material/form-field";
import { NgxAuthFirebaseUIConfig } from "../../interfaces";
import { AuthProcessService } from "../../services/auth-process.service";
import { FirestoreSyncService } from "../../services/firestore-sync.service";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class UserComponent {
    auth: AngularFireAuth;
    authProcess: AuthProcessService;
    private fireStoreService;
    config: NgxAuthFirebaseUIConfig;
    editMode: boolean;
    canLogout: boolean;
    canEditAccount: boolean;
    canDeleteAccount: boolean;
    appearance: MatFormFieldAppearance;
    notLoggedInText: string;
    emailVerifiedText: string;
    emailNotVerifiedText: string;
    cancelButtonText: string;
    saveChangesButtonText: string;
    editButtonText: string;
    signoutButtonText: string;
    deleteAccountButtonText: string;
    nameText: string;
    nameErrorRequiredText: string;
    emailText: string;
    emailErrorRequiredText: string;
    emailErrorPatternText: string;
    phoneText: string;
    phoneHintText: string;
    phoneErrorPatternText: string;
    onSignOut: EventEmitter<void>;
    onAccountEdited: EventEmitter<void>;
    onAccountDeleted: EventEmitter<void>;
    updateFormGroup: FormGroup;
    updateNameFormControl: FormControl;
    updateEmailFormControl: FormControl;
    updatePhoneNumberFormControl: FormControl;
    constructor(auth: AngularFireAuth, authProcess: AuthProcessService, fireStoreService: FirestoreSyncService, config: NgxAuthFirebaseUIConfig);
    changeEditMode(): void;
    reset(): void;
    save(): Promise<void>;
    signOut(): void;
    /**
     * Delete the account of the current firebase ngx-auth-firebaseui-user
     *
     * On Success, emit the <onAccountDeleted> event and toast a msg!#
     * Otherwise, log the and toast and error msg!
     *
     */
    deleteAccount(): Promise<void>;
    protected initUpdateFormGroup(): Observable<FormGroup>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserComponent, "ngx-auth-firebaseui-user", never, { "editMode": "editMode"; "canLogout": "canLogout"; "canEditAccount": "canEditAccount"; "canDeleteAccount": "canDeleteAccount"; "appearance": "appearance"; "notLoggedInText": "notLoggedInText"; "emailVerifiedText": "emailVerifiedText"; "emailNotVerifiedText": "emailNotVerifiedText"; "cancelButtonText": "cancelButtonText"; "saveChangesButtonText": "saveChangesButtonText"; "editButtonText": "editButtonText"; "signoutButtonText": "signoutButtonText"; "deleteAccountButtonText": "deleteAccountButtonText"; "nameText": "nameText"; "nameErrorRequiredText": "nameErrorRequiredText"; "emailText": "emailText"; "emailErrorRequiredText": "emailErrorRequiredText"; "emailErrorPatternText": "emailErrorPatternText"; "phoneText": "phoneText"; "phoneHintText": "phoneHintText"; "phoneErrorPatternText": "phoneErrorPatternText"; }, { "onSignOut": "onSignOut"; "onAccountEdited": "onAccountEdited"; "onAccountDeleted": "onAccountDeleted"; }, never, never>;
}
