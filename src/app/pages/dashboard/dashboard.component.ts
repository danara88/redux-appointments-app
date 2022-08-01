import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppointmentStatus } from 'src/app/models/appointment.model';
import { AppState } from 'src/app/store/app.reducers';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public appointmentsSubscription: Subscription = new Subscription();
    public totalAppointments: number = 0;
    public completedAppointments: number = 0;
    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this.appointmentsSubscription = this._store
            .select('appointment')
            .subscribe(({ appointments }) => {
                this.totalAppointments = appointments.length;
                this.completedAppointments = appointments.filter(
                    (item) => item.status === AppointmentStatus.COMPLETED
                ).length;
            });
    }
}
