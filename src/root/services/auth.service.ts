import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(
        private _router: Router
    ) { }

    get isLoggedIn(): boolean {
        return localStorage.getItem("verify") ? true : false;
    }

    authLogin() {
        localStorage.setItem("verify", "1");
    }
    signOut() {
        const verify = localStorage.getItem("verify");
        if (verify)
            localStorage.removeItem("verify")
    }

    signIn() {
        localStorage.setItem("verify", "1");
        this._router.navigate(["todo-list"]);
    }

}