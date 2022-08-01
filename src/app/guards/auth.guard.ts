import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
    providedIn: 'root',
})
/**
 * Guard to allow permission to view inside pages
 */
export class AuthGuard implements CanLoad {
    constructor(private _authService: AuthService, private _router: Router) {}

    canLoad(): Observable<boolean> {
        return this._authService.isAuth().pipe(
            tap((resp) => {
                if (!resp) this._router.navigateByUrl('/auth/login');
            }),
            take(1)
        );
    }
}
