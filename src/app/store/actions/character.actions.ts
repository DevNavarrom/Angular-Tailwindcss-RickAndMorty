import { Action } from '@ngrx/store';
import { CharacterModel } from 'src/app/models/character.model';
import { ResponseModel } from '../../models/response.model';



export const GET_CHARACTERS = '[CHARACTER] Get All';
export const GET_CHARACTERS_OKAY = '[CHARACTER] Get All Ok';
export const GET_CHARACTERS_FAIL = '[CHARACTER] Get All Fail';

export const GET_CHARACTER = '[CHARACTER] Get One';
export const GET_CHARACTER_OKAY = '[CHARACTER] Get One Ok';
export const GET_CHARACTER_FAIL = '[CHARACTER] Get One Fail';

export const GET_CHARACTERS_EPISODE = '[CHARACTERS EPISODES] Get All';
export const GET_CHARACTERS_EPISODE_OKAY = '[CHARACTERS EPISODES] Get All Ok';
export const GET_CHARACTERS_EPISODE_FAIL = '[CHARACTERS EPISODES] Get All Fail';


// Get All
export class GetCharactersAction implements Action {
    readonly type = GET_CHARACTERS;
    public constructor( public page?: number ) {}
}

export class GetCharactersOkayAction implements Action {
    readonly type = GET_CHARACTERS_OKAY;
    public constructor( public payload: ResponseModel ) {}
}

export class GetCharactersFailAction implements Action {
    readonly type = GET_CHARACTERS_FAIL;
    public constructor( public error: string ) {}
}

//Get One
export class GetCharacterAction implements Action {
    readonly type = GET_CHARACTER;
    public constructor( public id: number ) {}
}

export class GetCharacterOkayAction implements Action {
    readonly type = GET_CHARACTER_OKAY;
    public constructor( public payload: CharacterModel ) {}
}

export class GetCharacterFailAction implements Action {
    readonly type = GET_CHARACTER_FAIL;
    public constructor( public error: string ) {}
}

//Get All Characters
export class GetCharactersEpisodeAction implements Action {
    readonly type = GET_CHARACTERS_EPISODE;
    public constructor( public ids : number[] ) {}
}

export class GetCharactersEpisodeOkayAction implements Action {
    readonly type = GET_CHARACTERS_EPISODE_OKAY;
    public constructor( public payload: any[] ) {}
}

export class GetCharactersEpisodeFailAction implements Action {
    readonly type = GET_CHARACTERS_EPISODE_FAIL;
    public constructor( public error: string ) {}
}


export type actions = GetCharactersAction | GetCharactersOkayAction | GetCharactersFailAction |
                      GetCharacterAction  | GetCharacterOkayAction  | GetCharacterFailAction  |
                      GetCharactersEpisodeAction | GetCharactersEpisodeOkayAction | GetCharactersEpisodeFailAction;