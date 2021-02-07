import { CharacterModel } from '../../models/character.model';
import * as characterActions from '../actions/character.actions';
import { GET_CHARACTERS, GET_CHARACTERS_OKAY, GET_CHARACTERS_FAIL } from '../actions/character.actions';



export interface CharacterState {

    characters: CharacterModel[];
    loadingCharacters: boolean;
    errorLoadCharacters: string;

}

const stateInitial: CharacterState = {

    characters : new Array<CharacterModel>(),
    loadingCharacters : false,
    errorLoadCharacters : ""

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
        
            default:
                return state;
        }
    }