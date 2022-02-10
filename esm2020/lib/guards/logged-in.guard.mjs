import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { NgxAuthFirebaseUIConfigToken } from '../tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/auth-process.service";
export class LoggedInGuard {
    constructor(config, router, authProcess) {
        this.config = config;
        this.router = router;
        this.authProcess = authProcess;
    }
    canActivate(route, state) {
        return this.authProcess.afa.user.pipe(map(user => {
            if (user) {
                if (this.config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified && !user.isAnonymous) {
                    if (this.config.authGuardFallbackURL) {
                        this.router.navigate([`${this.config.authGuardFallbackURL}`], { queryParams: { redirectUrl: state.url } });
                    }
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                if (this.config.authGuardFallbackURL) {
                    this.router.navigate([`/${this.config.authGuardFallbackURL}`], { queryParams: { redirectUrl: state.url } });
                }
                return false;
            }
        }));
    }
}
LoggedInGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: LoggedInGuard, deps: [{ token: NgxAuthFirebaseUIConfigToken }, { token: i1.Router }, { token: i2.AuthProcessService }], target: i0.ɵɵFactoryTarget.Injectable });
LoggedInGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: LoggedInGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: LoggedInGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NgxAuthFirebaseUIConfigToken]
                }] }, { type: i1.Router }, { type: i2.AuthProcessService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9zcmMvbGliL2d1YXJkcy9sb2dnZWQtaW4uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHakQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRW5DLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLFdBQVcsQ0FBQzs7OztBQU12RCxNQUFNLE9BQU8sYUFBYTtJQUN4QixZQUVVLE1BQStCLEVBQy9CLE1BQWMsRUFDZCxXQUErQjtRQUYvQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO0lBRXpDLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBNkIsRUFBRSxLQUEwQjtRQUNuRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNULElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyx3Q0FBd0MsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNwRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7d0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUMsRUFBRSxFQUFDLFdBQVcsRUFBRSxFQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxDQUFDO3FCQUN4RztvQkFDRCxPQUFPLEtBQUssQ0FBQztpQkFDZDtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFFLEVBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLENBQUM7aUJBQ3pHO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7MEdBN0JVLGFBQWEsa0JBRWQsNEJBQTRCOzhHQUYzQixhQUFhLGNBRlosTUFBTTsyRkFFUCxhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBR0ksTUFBTTsyQkFBQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3R9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Tmd4QXV0aEZpcmViYXNlVUlDb25maWd9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ1Rva2VufSBmcm9tICcuLi90b2tlbnMnO1xuaW1wb3J0IHtBdXRoUHJvY2Vzc1NlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGgtcHJvY2Vzcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VkSW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ1Rva2VuKVxuICAgIHByaXZhdGUgY29uZmlnOiBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYXV0aFByb2Nlc3M6IEF1dGhQcm9jZXNzU2VydmljZVxuICApIHtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhQcm9jZXNzLmFmYS51c2VyLnBpcGUoXG4gICAgICBtYXAodXNlciA9PiB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmd1YXJkUHJvdGVjdGVkUm91dGVzVW50aWxFbWFpbElzVmVyaWZpZWQgJiYgIXVzZXIuZW1haWxWZXJpZmllZCAmJiAhdXNlci5pc0Fub255bW91cykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF1dGhHdWFyZEZhbGxiYWNrVVJMKSB7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgJHt0aGlzLmNvbmZpZy5hdXRoR3VhcmRGYWxsYmFja1VSTH1gXSwge3F1ZXJ5UGFyYW1zOiB7cmVkaXJlY3RVcmw6IHN0YXRlLnVybH19KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hdXRoR3VhcmRGYWxsYmFja1VSTCkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvJHt0aGlzLmNvbmZpZy5hdXRoR3VhcmRGYWxsYmFja1VSTH1gXSwge3F1ZXJ5UGFyYW1zOiB7cmVkaXJlY3RVcmw6IHN0YXRlLnVybH19KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==