import { MatDialogRef } from '@angular/material/dialog';
import { LegalityDialogParams } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class LegalityDialogComponent {
    dialogRef: MatDialogRef<LegalityDialogComponent>;
    data: LegalityDialogParams;
    checkTOS: boolean;
    checkPrivacyPolicy: boolean;
    constructor(dialogRef: MatDialogRef<LegalityDialogComponent>, data: LegalityDialogParams);
    private _disableConfirmActionButton;
    get disableConfirmActionButton(): boolean;
    closeDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LegalityDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LegalityDialogComponent, "ngx-auth-firebaseui-legality-dialog", never, {}, {}, never, never>;
}
