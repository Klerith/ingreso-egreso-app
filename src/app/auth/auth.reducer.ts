


import * as fromAuth from './auth.actions';
import { User } from './user.model';

export interface AuthState {
    user: User;
}

const estadoInicial: AuthState = {
    user: null
};

export function authReducer( state = estadoInicial, action: fromAuth.acciones ): AuthState {

    switch ( action.type ) {

        case fromAuth.SET_USER:
            return {
                user: { ... action.user }
            };

        case fromAuth.UNSET_USER:
            return {
                user: null
            };

        default:
            return state;

    }


}

