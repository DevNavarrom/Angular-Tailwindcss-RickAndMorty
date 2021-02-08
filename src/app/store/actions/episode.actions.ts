import { Action } from '@ngrx/store';
import { EpisodeModel } from 'src/app/models/episode.model';
import { ResponseModel } from '../../models/response.model';



export const GET_EPISODES = '[EPISODE] Get All';
export const GET_EPISODES_OKAY = '[EPISODE] Get All Ok';
export const GET_EPISODES_FAIL = '[EPISODE] Get All Fail';

export const GET_EPISODE = '[EPISODE] Get One';
export const GET_EPISODE_OKAY = '[EPISODE] Get One Ok';
export const GET_EPISODE_FAIL = '[EPISODE] Get One Fail';

export const GET_EPISODES_CHARACTER = '[EPISODES CHARACTER] Get All';
export const GET_EPISODES_CHARACTER_OKAY = '[EPISODES CHARACTER] Get All Ok';
export const GET_EPISODES_CHARACTER_FAIL = '[EPISODES CHARACTER] Get All Fail';


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

//Get One
export class GetEpisodeAction implements Action {
    readonly type = GET_EPISODE;
    public constructor( public id: number ) {}
}

export class GetEpisodeOkayAction implements Action {
    readonly type = GET_EPISODE_OKAY;
    public constructor( public payload: EpisodeModel ) {}
}

export class GetEpisodeFailAction implements Action {
    readonly type = GET_EPISODE_FAIL;
    public constructor( public error: string ) {}
}

//Get All Episodes
export class GetEpisodesCharacterAction implements Action {
    readonly type = GET_EPISODES_CHARACTER;
    public constructor( public ids : number[] ) {}
}

export class GetEpisodesCharacterOkayAction implements Action {
    readonly type = GET_EPISODES_CHARACTER_OKAY;
    public constructor( public payload: any[] ) {}
}

export class GetEpisodesCharacterFailAction implements Action {
    readonly type = GET_EPISODES_CHARACTER_FAIL;
    public constructor( public error: string ) {}
}


export type actions = GetEpisodesAction | GetEpisodesOkayAction | GetEpisodesFailAction |
                      GetEpisodeAction  | GetEpisodeOkayAction  | GetEpisodeFailAction  | 
                      GetEpisodesCharacterAction | GetEpisodesCharacterOkayAction | GetEpisodesCharacterFailAction;