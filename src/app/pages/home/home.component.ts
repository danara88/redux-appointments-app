import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(private _authService: AuthService, private _router: Router) {}

    ngOnInit(): void {}

    logout() {
        this._authService.logoutFirebase();
        this._router.navigate(['auth', 'login']);
    }
}
