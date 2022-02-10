import { EventEmitter, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { AuthProcessService } from "../../services/auth-process.service";
import * as i0 from "@angular/core";
export interface LinkMenuItem {
    text: string;
    icon?: string;
    callback?: Function;
}
export declare class NgxAuthFirebaseuiAvatarComponent implements OnInit {
    afa: AngularFireAuth;
    dialog: MatDialog;
    private authProcess;
    layout: "default" | "simple";
    canLogout: boolean;
    links: LinkMenuItem[];
    canViewAccount: boolean;
    canDeleteAccount: boolean;
    canEditAccount: boolean;
    textProfile: string;
    textSignOut: string;
    onSignOut: EventEmitter<void>;
    user: firebase.User;
    user$: Observable<firebase.User | null>;
    displayNameInitials: string | null;
    constructor(afa: AngularFireAuth, dialog: MatDialog, authProcess: AuthProcessService);
    ngOnInit(): void;
    getDisplayNameInitials(displayName: string | null): string | null;
    openProfile(): void;
    signOut(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxAuthFirebaseuiAvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxAuthFirebaseuiAvatarComponent, "ngx-auth-firebaseui-avatar", never, { "layout": "layout"; "canLogout": "canLogout"; "links": "links"; "canViewAccount": "canViewAccount"; "canDeleteAccount": "canDeleteAccount"; "canEditAccount": "canEditAccount"; "textProfile": "textProfile"; "textSignOut": "textSignOut"; }, { "onSignOut": "onSignOut"; }, never, never>;
}
