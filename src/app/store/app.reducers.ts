import { ActionReducerMap } from '@ngrx/store';
import * as user from './reducers/user.reducer';
import * as appointment from './reducers/appointment.reducer';

export interface AppState {
    user: user.UserState;
    appointment: appointment.AppointmentState;
}

export const appReducers: ActionReducerMap<AppState> = {
    user: user.userReducer,
    appointment: appointment.appointmentReducer,
};
