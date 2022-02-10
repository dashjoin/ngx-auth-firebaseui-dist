import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProcessService } from '../../services/auth-process.service';
import * as i0 from "@angular/core";
interface VerifyEmailContext {
    email: string;
    goBackURL: string;
    verifyEmailTitleText: string;
    verifyEmailConfirmationText: string;
    verifyEmailGoBackText: string;
    messageOnEmailConfirmationSuccess: string;
    messageOnError: string;
}
export declare class EmailConfirmationComponent implements OnInit, OnChanges {
    authProcess: AuthProcessService;
    private router;
    private changeDetectorRef;
    email: string;
    goBackURL: string;
    verifyEmailTitleText: string;
    verifyEmailConfirmationText: string;
    verifyEmailGoBackText: string;
    sendNewVerificationEmailText: string;
    signOutText: string;
    messageOnEmailConfirmationSuccess: string;
    template: TemplateRef<any>;
    signOut: EventEmitter<any>;
    verifyEmailTemplate: TemplateRef<any>;
    verifyEmailContext: VerifyEmailContext;
    isLoading: boolean;
    defaultTemplate: TemplateRef<any>;
    constructor(authProcess: AuthProcessService, router: Router, changeDetectorRef: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    continue(): Promise<void>;
    sendNewVerificationEmail(): Promise<void>;
    private createTemplateContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailConfirmationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailConfirmationComponent, "ngx-auth-firebaseui-email-confirmation", never, { "email": "email"; "goBackURL": "goBackURL"; "verifyEmailTitleText": "verifyEmailTitleText"; "verifyEmailConfirmationText": "verifyEmailConfirmationText"; "verifyEmailGoBackText": "verifyEmailGoBackText"; "sendNewVerificationEmailText": "sendNewVerificationEmailText"; "signOutText": "signOutText"; "messageOnEmailConfirmationSuccess": "messageOnEmailConfirmationSuccess"; "template": "template"; }, { "signOut": "signOut"; }, never, never>;
}
export {};
