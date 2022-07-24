import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const setUser = createAction('[User] Set user', props<{ user: User }>());

export const unsetUser = createAction('[User] Unset user');
