import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { setUser, unsetUser } from '../actions';

/**
 * User state interface
 */
export interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

export const userReducer = createReducer(
    initialState,

    on(setUser, (state, { user }) => ({ ...state, user: { ...user } })),

    on(unsetUser, (state) => ({ ...state, user: null }))
);
