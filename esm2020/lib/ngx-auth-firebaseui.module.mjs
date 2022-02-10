// @angular/*
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
// @angular/fire
import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// @angular/material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { NgxAuthFirebaseuiLoginComponent } from './components/ngx-auth-firebaseui-login/ngx-auth-firebaseui-login.component';
import { NgxAuthFirebaseuiRegisterComponent } from './components/ngx-auth-firebaseui-register/ngx-auth-firebaseui-register.component';
// ngx-auth-firebaseui
// components
import { AuthComponent } from './components/ngx-auth-firebaseui/auth.component';
import { UserComponent } from './components/ngx-auth-firebaseui-user/user.component';
import { AuthProvidersComponent } from './components/providers/auth.providers.component';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';
import { ngxAuthFirebaseUIConfigFactory } from './interfaces/config.interface';
import { NgxAuthFirebaseuiAvatarComponent } from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
import { LegalityDialogComponent } from './components/legality-dialog/legality-dialog.component';
// guards
import { LoggedInGuard } from './guards/logged-in.guard';
// services
import { FirestoreSyncService } from './services/firestore-sync.service';
import { AuthProcessService } from './services/auth-process.service';
import { NgxAuthFirebaseUIConfigToken, UserProvidedConfigToken } from './tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/platform-browser";
import * as i3 from "./services/auth-process.service";
// interfaces
// ###################################################################################################
// Export module's public API
// components
export { LegalityDialogComponent } from './components/legality-dialog/legality-dialog.component';
export { NgxAuthFirebaseuiAvatarComponent } from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
export { UserComponent } from './components/ngx-auth-firebaseui-user/user.component';
export { AuthComponent } from './components/ngx-auth-firebaseui/auth.component';
export { AuthProvidersComponent, Layout, Theme } from './components/providers/auth.providers.component';
export { NgxAuthFirebaseuiLoginComponent } from './components/ngx-auth-firebaseui-login/ngx-auth-firebaseui-login.component';
export { NgxAuthFirebaseuiRegisterComponent } from './components/ngx-auth-firebaseui-register/ngx-auth-firebaseui-register.component';
// guards
export { LoggedInGuard } from './guards/logged-in.guard';
// services
export { AuthProcessService, AuthProvider } from './services/auth-process.service';
export { FirestoreSyncService } from './services/firestore-sync.service';
export class NgxAuthFirebaseUIModule {
    constructor(iconRegistry, sanitizer, auth) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        auth.listenToUserEvents();
        this.registerProviderIcons();
    }
    static forRoot(configFactory, appNameFactory = () => undefined, config = {}) {
        return {
            ngModule: NgxAuthFirebaseUIModule,
            providers: [
                {
                    provide: FIREBASE_OPTIONS,
                    useValue: configFactory
                },
                {
                    provide: FIREBASE_APP_NAME,
                    useFactory: appNameFactory
                },
                { provide: UserProvidedConfigToken, useValue: config },
                {
                    provide: NgxAuthFirebaseUIConfigToken,
                    useFactory: ngxAuthFirebaseUIConfigFactory,
                    deps: [UserProvidedConfigToken]
                },
                AuthProcessService,
                FirestoreSyncService,
                LoggedInGuard
            ]
        };
    }
    registerProviderIcons() {
        this.iconRegistry
            .addSvgIcon('google', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/google.svg'))
            .addSvgIcon('apple', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/apple.svg'))
            .addSvgIcon('google-colored', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/google.svg'))
            .addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/facebook.svg'))
            .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/twitter.svg'))
            .addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/github-circle.svg'))
            .addSvgIcon('microsoft', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/microsoft.svg'))
            .addSvgIcon('yahoo', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/yahoo.svg'))
            .addSvgIcon('phone', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/phone.svg'));
    }
}
NgxAuthFirebaseUIModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: NgxAuthFirebaseUIModule, deps: [{ token: i1.MatIconRegistry }, { token: i2.DomSanitizer }, { token: i3.AuthProcessService }], target: i0.ɵɵFactoryTarget.NgModule });
NgxAuthFirebaseUIModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: NgxAuthFirebaseUIModule, declarations: [AuthComponent,
        UserComponent,
        NgxAuthFirebaseuiAvatarComponent,
        AuthProvidersComponent,
        EmailConfirmationComponent,
        LegalityDialogComponent,
        NgxAuthFirebaseuiLoginComponent,
        NgxAuthFirebaseuiRegisterComponent], imports: [CommonModule,
        // HTTP
        RouterModule,
        HttpClientModule,
        // FLEX_LAYOUT
        FlexLayoutModule,
        // FORMS
        FormsModule,
        ReactiveFormsModule,
        // MATERIAL2
        MatTabsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatDividerModule,
        MatChipsModule,
        MatTooltipModule,
        MatDialogModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatMenuModule,
        // ANGULAR MATERIAL EXTENSIONS
        MatPasswordStrengthModule,
        // ANGULARFIRE2
        AngularFireAuthModule,
        AngularFirestoreModule], exports: [AuthComponent,
        UserComponent,
        NgxAuthFirebaseuiAvatarComponent,
        AuthProvidersComponent,
        EmailConfirmationComponent,
        // LoggedInGuard,
        AngularFireAuthModule,
        AngularFirestoreModule,
        NgxAuthFirebaseuiLoginComponent,
        NgxAuthFirebaseuiRegisterComponent] });
NgxAuthFirebaseUIModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: NgxAuthFirebaseUIModule, imports: [[
            CommonModule,
            // HTTP
            RouterModule,
            HttpClientModule,
            // FLEX_LAYOUT
            FlexLayoutModule,
            // FORMS
            FormsModule,
            ReactiveFormsModule,
            // MATERIAL2
            MatTabsModule,
            MatCardModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
            MatSnackBarModule,
            MatDividerModule,
            MatChipsModule,
            MatTooltipModule,
            MatDialogModule,
            MatCheckboxModule,
            MatProgressSpinnerModule,
            MatProgressBarModule,
            MatDialogModule,
            MatMenuModule,
            // ANGULAR MATERIAL EXTENSIONS
            MatPasswordStrengthModule,
            // ANGULARFIRE2
            AngularFireAuthModule,
            AngularFirestoreModule,
        ], 
        // LoggedInGuard,
        AngularFireAuthModule,
        AngularFirestoreModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: NgxAuthFirebaseUIModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        // HTTP
                        RouterModule,
                        HttpClientModule,
                        // FLEX_LAYOUT
                        FlexLayoutModule,
                        // FORMS
                        FormsModule,
                        ReactiveFormsModule,
                        // MATERIAL2
                        MatTabsModule,
                        MatCardModule,
                        MatInputModule,
                        MatButtonModule,
                        MatIconModule,
                        MatSnackBarModule,
                        MatDividerModule,
                        MatChipsModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatCheckboxModule,
                        MatProgressSpinnerModule,
                        MatProgressBarModule,
                        MatDialogModule,
                        MatMenuModule,
                        // ANGULAR MATERIAL EXTENSIONS
                        MatPasswordStrengthModule,
                        // ANGULARFIRE2
                        AngularFireAuthModule,
                        AngularFirestoreModule,
                    ],
                    exports: [
                        AuthComponent,
                        UserComponent,
                        NgxAuthFirebaseuiAvatarComponent,
                        AuthProvidersComponent,
                        EmailConfirmationComponent,
                        // LoggedInGuard,
                        AngularFireAuthModule,
                        AngularFirestoreModule,
                        NgxAuthFirebaseuiLoginComponent,
                        NgxAuthFirebaseuiRegisterComponent
                    ],
                    declarations: [
                        AuthComponent,
                        UserComponent,
                        NgxAuthFirebaseuiAvatarComponent,
                        AuthProvidersComponent,
                        EmailConfirmationComponent,
                        LegalityDialogComponent,
                        NgxAuthFirebaseuiLoginComponent,
                        NgxAuthFirebaseuiRegisterComponent
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }, { type: i3.AuthProcessService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dGgtZmlyZWJhc2V1aS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXV0aC1maXJlYmFzZXVpL3NyYy9saWIvbmd4LWF1dGgtZmlyZWJhc2V1aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYTtBQUNiLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELGdCQUFnQjtBQUNoQixPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxvQkFBb0I7QUFDcEIsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQWtCLE1BQU0sd0JBQXdCLENBQUM7QUFDdEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFM0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFHekYsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0sNEVBQTRFLENBQUM7QUFDM0gsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sa0ZBQWtGLENBQUM7QUFJcEksc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saURBQWlELENBQUM7QUFDOUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDhEQUE4RCxDQUFDO0FBQ3hHLE9BQU8sRUFBMEIsOEJBQThCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RyxPQUFPLEVBQUMsZ0NBQWdDLEVBQUMsTUFBTSw4RUFBOEUsQ0FBQztBQUM5SCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3REFBd0QsQ0FBQztBQUMvRixTQUFTO0FBQ1QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELFdBQVc7QUFDWCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsNEJBQTRCLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxVQUFVLENBQUM7Ozs7O0FBQy9FLGFBQWE7QUFDYixzR0FBc0c7QUFDdEcsNkJBQTZCO0FBQzdCLGFBQWE7QUFDYixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3REFBd0QsQ0FBQztBQUMvRixPQUFPLEVBQWUsZ0NBQWdDLEVBQUMsTUFBTSw4RUFBOEUsQ0FBQztBQUM1SSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDbkYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQzlFLE9BQU8sRUFBQyxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLE1BQU0saURBQWlELENBQUM7QUFDdEcsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0sNEVBQTRFLENBQUM7QUFDM0gsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sa0ZBQWtGLENBQUM7QUFHcEksU0FBUztBQUNULE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUd2RCxXQUFXO0FBQ1gsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFlBQVksRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBMkR2RSxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQW9CLFlBQTZCLEVBQVUsU0FBdUIsRUFBRSxJQUF3QjtRQUF4RixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ2hGLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFHRCxNQUFNLENBQUMsT0FBTyxDQUNaLGFBQThCLEVBQzlCLGlCQUEyQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQzFELFNBQWtDLEVBQUU7UUFHcEMsT0FBTztZQUNMLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsU0FBUyxFQUNQO2dCQUNFO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxhQUFhO2lCQUN4QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixVQUFVLEVBQUUsY0FBYztpQkFDM0I7Z0JBQ0QsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQztnQkFDcEQ7b0JBQ0UsT0FBTyxFQUFFLDRCQUE0QjtvQkFDckMsVUFBVSxFQUFFLDhCQUE4QjtvQkFDMUMsSUFBSSxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ2hDO2dCQUNELGtCQUFrQjtnQkFDbEIsb0JBQW9CO2dCQUNwQixhQUFhO2FBQ2Q7U0FDSixDQUFDO0lBQ0osQ0FBQztJQUVELHFCQUFxQjtRQUNuQixJQUFJLENBQUMsWUFBWTthQUNkLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2FBQzdGLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2FBQzNGLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDakcsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLDBCQUEwQixDQUFDLENBQUM7YUFDakcsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLHlCQUF5QixDQUFDLENBQUM7YUFDL0YsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLCtCQUErQixDQUFDLENBQUM7YUFDcEcsVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDbkcsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLHVCQUF1QixDQUFDLENBQUM7YUFDM0YsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDOztvSEFqRFUsdUJBQXVCO3FIQUF2Qix1QkFBdUIsaUJBVjVCLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0NBQWdDO1FBQ2hDLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLCtCQUErQjtRQUMvQixrQ0FBa0MsYUFuRGxDLFlBQVk7UUFDWixPQUFPO1FBQ1AsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLFFBQVE7UUFDUixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixhQUFhO1FBQ2IsYUFBYTtRQUNiLGNBQWM7UUFDZCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsc0JBQXNCLGFBR3RCLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0NBQWdDO1FBQ2hDLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsK0JBQStCO1FBQy9CLGtDQUFrQztxSEFhN0IsdUJBQXVCLFlBdkR2QjtZQUNMLFlBQVk7WUFDWixPQUFPO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLFFBQVE7WUFDUixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixhQUFhO1lBQ2IsYUFBYTtZQUNiLGNBQWM7WUFDZCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLHdCQUF3QjtZQUN4QixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLGFBQWE7WUFDYiw4QkFBOEI7WUFDOUIseUJBQXlCO1lBQ3pCLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsc0JBQXNCO1NBQ3pCO1FBT0csaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixzQkFBc0I7MkZBZWpCLHVCQUF1QjtrQkF4RG5DLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osT0FBTzt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLFFBQVE7d0JBQ1IsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsOEJBQThCO3dCQUM5Qix5QkFBeUI7d0JBQ3pCLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixzQkFBc0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZ0NBQWdDO3dCQUNoQyxzQkFBc0I7d0JBQ3RCLDBCQUEwQjt3QkFDMUIsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsK0JBQStCO3dCQUMvQixrQ0FBa0M7cUJBQ3JDO29CQUNELFlBQVksRUFBRTt3QkFDVixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZ0NBQWdDO3dCQUNoQyxzQkFBc0I7d0JBQ3RCLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3dCQUN2QiwrQkFBK0I7d0JBQy9CLGtDQUFrQztxQkFDckM7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAYW5ndWxhci8qXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7RmxleExheW91dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuLy8gQGFuZ3VsYXIvZmlyZVxuaW1wb3J0IHtGSVJFQkFTRV9BUFBfTkFNRSwgRklSRUJBU0VfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0JztcbmltcG9ydCB7IEZpcmViYXNlT3B0aW9ucyB9IGZyb20gJ0BmaXJlYmFzZS9hcHAtdHlwZXMnO1xuaW1wb3J0IHtBbmd1bGFyRmlyZUF1dGhNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2F1dGgnO1xuaW1wb3J0IHtBbmd1bGFyRmlyZXN0b3JlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9maXJlc3RvcmUnO1xuLy8gQGFuZ3VsYXIvbWF0ZXJpYWxcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0Q2hpcHNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7TWF0RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZSwgTWF0SWNvblJlZ2lzdHJ5fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuaW1wb3J0IHtNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5pbXBvcnQge01hdFBhc3N3b3JkU3RyZW5ndGhNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvcGFzc3dvcmQtc3RyZW5ndGgnO1xuXG5cbmltcG9ydCB7Tmd4QXV0aEZpcmViYXNldWlMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25neC1hdXRoLWZpcmViYXNldWktbG9naW4vbmd4LWF1dGgtZmlyZWJhc2V1aS1sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hBdXRoRmlyZWJhc2V1aVJlZ2lzdGVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS1yZWdpc3Rlci9uZ3gtYXV0aC1maXJlYmFzZXVpLXJlZ2lzdGVyLmNvbXBvbmVudCc7XG5cblxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gbmd4LWF1dGgtZmlyZWJhc2V1aVxuLy8gY29tcG9uZW50c1xuaW1wb3J0IHtBdXRoQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9hdXRoLmNvbXBvbmVudCc7XG5pbXBvcnQge1VzZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpLXVzZXIvdXNlci5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoUHJvdmlkZXJzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvcHJvdmlkZXJzL2F1dGgucHJvdmlkZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQge0VtYWlsQ29uZmlybWF0aW9uQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZW1haWwtY29uZmlybWF0aW9uL2VtYWlsLWNvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZywgbmd4QXV0aEZpcmViYXNlVUlDb25maWdGYWN0b3J5fSBmcm9tICcuL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQge05neEF1dGhGaXJlYmFzZXVpQXZhdGFyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIvbmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIuY29tcG9uZW50JztcbmltcG9ydCB7TGVnYWxpdHlEaWFsb2dDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9sZWdhbGl0eS1kaWFsb2cvbGVnYWxpdHktZGlhbG9nLmNvbXBvbmVudCc7XG4vLyBndWFyZHNcbmltcG9ydCB7TG9nZ2VkSW5HdWFyZH0gZnJvbSAnLi9ndWFyZHMvbG9nZ2VkLWluLmd1YXJkJztcbi8vIHNlcnZpY2VzXG5pbXBvcnQge0ZpcmVzdG9yZVN5bmNTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2ZpcmVzdG9yZS1zeW5jLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoUHJvY2Vzc1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvYXV0aC1wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ1Rva2VuLCBVc2VyUHJvdmlkZWRDb25maWdUb2tlbn0gZnJvbSAnLi90b2tlbnMnO1xuLy8gaW50ZXJmYWNlc1xuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyBFeHBvcnQgbW9kdWxlJ3MgcHVibGljIEFQSVxuLy8gY29tcG9uZW50c1xuZXhwb3J0IHtMZWdhbGl0eURpYWxvZ0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2xlZ2FsaXR5LWRpYWxvZy9sZWdhbGl0eS1kaWFsb2cuY29tcG9uZW50JztcbmV4cG9ydCB7TGlua01lbnVJdGVtLCBOZ3hBdXRoRmlyZWJhc2V1aUF2YXRhckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25neC1hdXRoLWZpcmViYXNldWktYXZhdGFyL25neC1hdXRoLWZpcmViYXNldWktYXZhdGFyLmNvbXBvbmVudCc7XG5leHBvcnQge1VzZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpLXVzZXIvdXNlci5jb21wb25lbnQnO1xuZXhwb3J0IHtBdXRoQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9hdXRoLmNvbXBvbmVudCc7XG5leHBvcnQge0F1dGhQcm92aWRlcnNDb21wb25lbnQsIExheW91dCwgVGhlbWV9IGZyb20gJy4vY29tcG9uZW50cy9wcm92aWRlcnMvYXV0aC5wcm92aWRlcnMuY29tcG9uZW50JztcbmV4cG9ydCB7Tmd4QXV0aEZpcmViYXNldWlMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25neC1hdXRoLWZpcmViYXNldWktbG9naW4vbmd4LWF1dGgtZmlyZWJhc2V1aS1sb2dpbi5jb21wb25lbnQnO1xuZXhwb3J0IHtOZ3hBdXRoRmlyZWJhc2V1aVJlZ2lzdGVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS1yZWdpc3Rlci9uZ3gtYXV0aC1maXJlYmFzZXVpLXJlZ2lzdGVyLmNvbXBvbmVudCc7XG5cblxuLy8gZ3VhcmRzXG5leHBvcnQge0xvZ2dlZEluR3VhcmR9IGZyb20gJy4vZ3VhcmRzL2xvZ2dlZC1pbi5ndWFyZCc7XG4vLyBpbnRlcmZhY2VzXG5leHBvcnQge05neEF1dGhGaXJlYmFzZVVJQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZSc7XG4vLyBzZXJ2aWNlc1xuZXhwb3J0IHtBdXRoUHJvY2Vzc1NlcnZpY2UsIEF1dGhQcm92aWRlcn0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLXByb2Nlc3Muc2VydmljZSc7XG5leHBvcnQge0ZpcmVzdG9yZVN5bmNTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2ZpcmVzdG9yZS1zeW5jLnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIC8vIEhUVFBcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICAvLyBGTEVYX0xBWU9VVFxuICAgICAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgICAgICAvLyBGT1JNU1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgLy8gTUFURVJJQUwyXG4gICAgICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGUsXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXG4gICAgICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgICAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgICAgICBNYXRDaGlwc01vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgICAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICAgICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgICAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgICAgICBNYXRNZW51TW9kdWxlLFxuICAgICAgICAvLyBBTkdVTEFSIE1BVEVSSUFMIEVYVEVOU0lPTlNcbiAgICAgICAgTWF0UGFzc3dvcmRTdHJlbmd0aE1vZHVsZSxcbiAgICAgICAgLy8gQU5HVUxBUkZJUkUyXG4gICAgICAgIEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSxcbiAgICAgICAgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQXV0aENvbXBvbmVudCxcbiAgICAgICAgVXNlckNvbXBvbmVudCxcbiAgICAgICAgTmd4QXV0aEZpcmViYXNldWlBdmF0YXJDb21wb25lbnQsXG4gICAgICAgIEF1dGhQcm92aWRlcnNDb21wb25lbnQsXG4gICAgICAgIEVtYWlsQ29uZmlybWF0aW9uQ29tcG9uZW50LFxuICAgICAgICAvLyBMb2dnZWRJbkd1YXJkLFxuICAgICAgICBBbmd1bGFyRmlyZUF1dGhNb2R1bGUsXG4gICAgICAgIEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUsXG4gICAgICAgIE5neEF1dGhGaXJlYmFzZXVpTG9naW5Db21wb25lbnQsXG4gICAgICAgIE5neEF1dGhGaXJlYmFzZXVpUmVnaXN0ZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBdXRoQ29tcG9uZW50LFxuICAgICAgICBVc2VyQ29tcG9uZW50LFxuICAgICAgICBOZ3hBdXRoRmlyZWJhc2V1aUF2YXRhckNvbXBvbmVudCxcbiAgICAgICAgQXV0aFByb3ZpZGVyc0NvbXBvbmVudCxcbiAgICAgICAgRW1haWxDb25maXJtYXRpb25Db21wb25lbnQsXG4gICAgICAgIExlZ2FsaXR5RGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBOZ3hBdXRoRmlyZWJhc2V1aUxvZ2luQ29tcG9uZW50LFxuICAgICAgICBOZ3hBdXRoRmlyZWJhc2V1aVJlZ2lzdGVyQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hBdXRoRmlyZWJhc2VVSU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaWNvblJlZ2lzdHJ5OiBNYXRJY29uUmVnaXN0cnksIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIGF1dGg6IEF1dGhQcm9jZXNzU2VydmljZSkge1xuICAgIGF1dGgubGlzdGVuVG9Vc2VyRXZlbnRzKCk7XG4gICAgdGhpcy5yZWdpc3RlclByb3ZpZGVySWNvbnMoKTtcbiAgfVxuXG5cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgY29uZmlnRmFjdG9yeTogRmlyZWJhc2VPcHRpb25zLFxuICAgIGFwcE5hbWVGYWN0b3J5OiAoKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQgPSAoKSA9PiB1bmRlZmluZWQsXG4gICAgY29uZmlnOiBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZyA9IHt9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4QXV0aEZpcmViYXNlVUlNb2R1bGU+IHtcblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4QXV0aEZpcmViYXNlVUlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6XG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBGSVJFQkFTRV9PUFRJT05TLFxuICAgICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ0ZhY3RvcnlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEZJUkVCQVNFX0FQUF9OQU1FLFxuICAgICAgICAgICAgdXNlRmFjdG9yeTogYXBwTmFtZUZhY3RvcnlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtwcm92aWRlOiBVc2VyUHJvdmlkZWRDb25maWdUb2tlbiwgdXNlVmFsdWU6IGNvbmZpZ30sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTmd4QXV0aEZpcmViYXNlVUlDb25maWdUb2tlbixcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IG5neEF1dGhGaXJlYmFzZVVJQ29uZmlnRmFjdG9yeSxcbiAgICAgICAgICAgIGRlcHM6IFtVc2VyUHJvdmlkZWRDb25maWdUb2tlbl1cbiAgICAgICAgICB9LFxuICAgICAgICAgIEF1dGhQcm9jZXNzU2VydmljZSxcbiAgICAgICAgICBGaXJlc3RvcmVTeW5jU2VydmljZSxcbiAgICAgICAgICBMb2dnZWRJbkd1YXJkXG4gICAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgcmVnaXN0ZXJQcm92aWRlckljb25zKCkge1xuICAgIHRoaXMuaWNvblJlZ2lzdHJ5XG4gICAgICAuYWRkU3ZnSWNvbignZ29vZ2xlJywgdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCcvYXNzZXRzL21kaS9nb29nbGUuc3ZnJykpXG4gICAgICAuYWRkU3ZnSWNvbignYXBwbGUnLCB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJy9hc3NldHMvbWRpL2FwcGxlLnN2ZycpKVxuICAgICAgLmFkZFN2Z0ljb24oJ2dvb2dsZS1jb2xvcmVkJywgdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCcvYXNzZXRzL2dvb2dsZS5zdmcnKSlcbiAgICAgIC5hZGRTdmdJY29uKCdmYWNlYm9vaycsIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnL2Fzc2V0cy9tZGkvZmFjZWJvb2suc3ZnJykpXG4gICAgICAuYWRkU3ZnSWNvbigndHdpdHRlcicsIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnL2Fzc2V0cy9tZGkvdHdpdHRlci5zdmcnKSlcbiAgICAgIC5hZGRTdmdJY29uKCdnaXRodWInLCB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJy9hc3NldHMvbWRpL2dpdGh1Yi1jaXJjbGUuc3ZnJykpXG4gICAgICAuYWRkU3ZnSWNvbignbWljcm9zb2Z0JywgdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCcvYXNzZXRzL21kaS9taWNyb3NvZnQuc3ZnJykpXG4gICAgICAuYWRkU3ZnSWNvbigneWFob28nLCB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJy9hc3NldHMvbWRpL3lhaG9vLnN2ZycpKVxuICAgICAgLmFkZFN2Z0ljb24oJ3Bob25lJywgdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCcvYXNzZXRzL3Bob25lLnN2ZycpKTtcbiAgfVxufVxuIl19