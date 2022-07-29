import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppState } from 'src/app/store/app.reducers';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: [],
})
export class NavbarComponent implements OnInit, OnDestroy {
    public user: User | null = new User('', '', '', '');
    public userSubs: Subscription = new Subscription();

    constructor(
        private _authService: AuthService,
        private _router: Router,
        private store$: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.userSubs = this.store$
            .select('user')
            .pipe(filter((state) => state.user !== null))
            .subscribe(({ user }) => {
                this.user = user;
            });
    }

    /**
     * Method to log out the user from firebase
     */
    logout() {
        this._authService.logoutFirebase();
        this._router.navigate(['auth', 'login']);
    }

    ngOnDestroy(): void {
        this.userSubs.unsubscribe();
    }
}
