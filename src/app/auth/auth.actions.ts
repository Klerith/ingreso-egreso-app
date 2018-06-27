import { Action } from '@ngrx/store';
import { User } from './user.model';


export const SET_USER = '[Auth] Set User';


export class SetUserAction implements Action {
    readonly type = SET_USER;

    constructor( public user: User ) {}
}


export type acciones = SetUserAction;
