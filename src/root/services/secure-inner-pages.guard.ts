import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
    providedIn: 'root',
})
export class SecureInnerPagesGuard implements CanActivate {
    constructor(public authService: AuthService, public router: Router) { }
    canActivate(
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.isLoggedIn) {
            window.alert('Access Denied, Login is Required to Access This Page!');
            this.router.navigate(['email-verification']);
            return false;
        } else {
            return true;
        }
    }
}