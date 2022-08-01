import { createAction, props } from '@ngrx/store';
import { Appointment } from 'src/app/models/appointment.model';

export const setAppointments = createAction(
    '[Appointment] Set appointments',
    props<{ appointments: Appointment[] }>()
);

export const unsetAppointments = createAction('[Appointment] Unset appointments');
