import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: [],
})
export class NavbarComponent implements OnInit {
    constructor(private _authService: AuthService, private _router: Router) {}

    ngOnInit(): void {}

    /**
     * Method to log out the user from firebase
     */
    logout() {
        this._authService.logoutFirebase();
        this._router.navigate(['auth', 'login']);
    }
}
