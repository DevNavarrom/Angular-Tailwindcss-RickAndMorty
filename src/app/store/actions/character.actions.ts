import { Action } from '@ngrx/store';
import { ResponseModel } from '../../models/response.model';



export const GET_CHARACTERS = '[CHARACTER] Get All';
export const GET_CHARACTERS_OKAY = '[CHARACTER] Get All Ok';
export const GET_CHARACTERS_FAIL = '[CHARACTER] Get All Fail';



export class GetCharactersAction implements Action {
    readonly type = GET_CHARACTERS;
    public constructor() {}
}

export class GetCharactersOkayAction implements Action {
    readonly type = GET_CHARACTERS_OKAY;
    public constructor( public payload: ResponseModel ) {}
}

export class GetCharactersFailAction implements Action {
    readonly type = GET_CHARACTERS_FAIL;
    public constructor( public error: string ) {}
}


export type actions = GetCharactersAction | GetCharactersOkayAction | GetCharactersFailAction;