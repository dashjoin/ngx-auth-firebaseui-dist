import { AuthProcessService, AuthProvider } from '../../services/auth-process.service';
import { LegalityDialogComponent } from '../legality-dialog/legality-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare enum Theme {
    DEFAULT = "default",
    CLASSIC = "classic",
    STROKED = "stroked",
    FAB = "fab",
    MINI_FAB = "mini-fab",
    RAISED = "raised"
}
export declare enum Layout {
    ROW = "row",
    COLUMN = "column"
}
export declare class AuthProvidersComponent {
    authProcess: AuthProcessService;
    dialog: MatDialog;
    theme: Theme;
    layout: string;
    providers: AuthProvider[] | AuthProvider;
    onSuccess: any;
    onError: any;
    tosUrl: string;
    privacyPolicyUrl: string;
    dialogRef: MatDialogRef<LegalityDialogComponent>;
    themes: typeof Theme;
    authProvider: typeof AuthProvider;
    constructor(authProcess: AuthProcessService, dialog: MatDialog);
    processLegalSignUP(authProvider?: AuthProvider): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthProvidersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuthProvidersComponent, "ngx-auth-firebaseui-providers", never, { "theme": "theme"; "layout": "layout"; "providers": "providers"; "tosUrl": "tosUrl"; "privacyPolicyUrl": "privacyPolicyUrl"; }, { "onSuccess": "onSuccess"; "onError": "onError"; }, never, never>;
}
