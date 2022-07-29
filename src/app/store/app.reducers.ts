import { ActionReducerMap } from '@ngrx/store';
import * as user from './reducers';

export interface AppState {
    user: user.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
    user: user.userReducer,
};
