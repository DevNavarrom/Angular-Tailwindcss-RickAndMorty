import { EpisodeModel } from 'src/app/models/episode.model';
import { CharacterModel } from '../../models/character.model';
import * as characterActions from '../actions/character.actions';
import { GET_CHARACTERS, GET_CHARACTERS_OKAY, GET_CHARACTERS_FAIL, GET_CHARACTER, GET_CHARACTER_OKAY, GET_CHARACTER_FAIL } from '../actions/character.actions';



export interface CharacterState {

    characters: CharacterModel[];
    loadingCharacters: boolean;
    errorLoadCharacters: string;

    character: CharacterModel;
    loadingCharacter: boolean;
    errorLoadCharacter: string;

}

const stateInitial: CharacterState = {

    characters : new Array<CharacterModel>(),
    loadingCharacters : false,
    errorLoadCharacters : "",
    
    character: new CharacterModel(),
    loadingCharacter: false,
    errorLoadCharacter: ""

}

export function charactersReducer( 
    state: CharacterState = stateInitial, action: characterActions.actions ) : CharacterState {

        switch ( action.type ) {
            case GET_CHARACTERS:
                return {
                    ...state,
                    loadingCharacters: true,
                    errorLoadCharacters: ""
                }
            case GET_CHARACTERS_OKAY:
                return {
                    ...state,
                    loadingCharacters: false,
                    errorLoadCharacters: "",
                    characters: action.payload.results
                }
            case GET_CHARACTERS_FAIL:
                return {
                    ...state,
                    loadingCharacters: false,
                    errorLoadCharacters: action.error,
                    characters: new Array<CharacterModel>()
                }
            case GET_CHARACTER:
                return {
                    ...state,
                    loadingCharacter: true,
                    errorLoadCharacter: ""
                }
            case GET_CHARACTER_OKAY:
                return {
                    ...state,
                    loadingCharacter: false,
                    errorLoadCharacter: "",
                    character: action.payload
                }
            case GET_CHARACTER_FAIL:
                return {
                    ...state,
                    loadingCharacter: false,
                    errorLoadCharacter: action.error,
                    character: new CharacterModel()
                }
            
        
            default:
                return state;
        }
    }