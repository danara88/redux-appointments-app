import { createReducer, on } from '@ngrx/store';
import { Appointment } from 'src/app/models/appointment.model';
import { setAppointments, unsetAppointments } from '../actions';

export interface AppointmentState {
    appointments: Appointment[];
}

const initialState: AppointmentState = {
    appointments: [],
};

export const appointmentReducer = createReducer(
    initialState,

    on(setAppointments, (state, { appointments }) => ({
        ...state,
        appointments: [...appointments],
    })),

    on(unsetAppointments, (state) => ({
        ...state,
        appointments: [],
    }))
);
