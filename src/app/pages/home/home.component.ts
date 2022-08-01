import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { setAppointments } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    public userSubscription: Subscription = new Subscription();
    public appointmentsSubscription: Subscription = new Subscription();

    constructor(
        private _authService: AuthService,
        private _store: Store<AppState>,
        private _appointmentService: AppointmentService
    ) {}

    ngOnInit(): void {
        this._authService.initAuthListener();
        this.userSubscription = this._store
            .select('user')
            .pipe(filter((resp) => resp.user !== null))
            .subscribe(({ user }) => {
                this.appointmentsSubscription = this._appointmentService
                    .getAppointments(user!.uid)
                    .subscribe((appointments) => {
                        this._store.dispatch(setAppointments({ appointments: appointments }));
                    });
            });
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
        this.appointmentsSubscription.unsubscribe();
    }
}
