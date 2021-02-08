import { Action } from '@ngrx/store';
import { ResponseModel } from '../../models/response.model';



export const GET_EPISODES = '[EPISODE] Get All';
export const GET_EPISODES_OKAY = '[EPISODE] Get All Ok';
export const GET_EPISODES_FAIL = '[EPISODE] Get All Fail';


export class GetEpisodesAction implements Action {
    readonly type = GET_EPISODES;
    public constructor() {}
}

export class GetEpisodesOkayAction implements Action {
    readonly type = GET_EPISODES_OKAY;
    public constructor( public payload: ResponseModel ) {}
}

export class GetEpisodesFailAction implements Action {
    readonly type = GET_EPISODES_FAIL;
    public constructor( public error: string ) {}
}


export type actions = GetEpisodesAction | GetEpisodesOkayAction | GetEpisodesFailAction;