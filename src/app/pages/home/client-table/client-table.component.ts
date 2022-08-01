import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appointment } from 'src/app/models/appointment.model';
import { AppState } from 'src/app/store/app.reducers';
@Component({
    selector: 'app-client-table',
    templateUrl: './client-table.component.html',
    styleUrls: ['./client-table.component.scss'],
})
export class ClientTableComponent implements OnInit {
    public appointments: Appointment[] = [];
    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this._store
            .select('appointment')
            .subscribe(({ appointments }) => (this.appointments = appointments));
    }
}
