import { EpisodeModel } from 'src/app/models/episode.model';
import { CharacterModel } from '../../models/character.model';
import * as characterActions from '../actions/character.actions';
import { GET_CHARACTERS, GET_CHARACTERS_OKAY, GET_CHARACTERS_FAIL, GET_CHARACTER, GET_CHARACTER_OKAY, GET_CHARACTER_FAIL, GET_CHARACTERS_EPISODE, GET_CHARACTERS_EPISODE_OKAY, GET_CHARACTERS_EPISODE_FAIL } from '../actions/character.actions';



export interface CharacterState {

    characters: CharacterModel[];
    loadingCharacters: boolean;
    errorLoadCharacters: string;

    character: CharacterModel;
    loadingCharacter: boolean;
    errorLoadCharacter: string;

    charactersEpisode: CharacterModel[];
    loadingcharactersEpisode: boolean;
    errorLoadcharactersEpisode: string;

    pages: number;

}

const stateInitial: CharacterState = {

    characters : new Array<CharacterModel>(),
    loadingCharacters : false,
    errorLoadCharacters : "",
    
    character: new CharacterModel(),
    loadingCharacter: false,
    errorLoadCharacter: "",

    charactersEpisode : new Array<CharacterModel>(),
    loadingcharactersEpisode : false,
    errorLoadcharactersEpisode : "",

    pages: 0

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
                let temp: CharacterModel[];
                if (action.payload.results.length > 0) {
                    temp = new Array<CharacterModel>();
                    if (state.characters.length > 0) { 
                        temp = state.characters;
                    }
                    /* action.payload.results.forEach( (item: CharacterModel) => {
                        // state.characters.concat(item);
                        temp.concat(item);
                    }); */
                    temp = action.payload.results;
                    console.log(temp);
                }
                return {
                    ...state,
                    loadingCharacters: false,
                    errorLoadCharacters: "",
                    characters: temp,
                    pages: action.payload.info.pages
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
            case GET_CHARACTERS_EPISODE:
                return {
                    ...state,
                    loadingcharactersEpisode: true,
                    errorLoadcharactersEpisode: ""
                }
            case GET_CHARACTERS_EPISODE_OKAY:
                return {
                    ...state,
                    loadingcharactersEpisode: false,
                    errorLoadcharactersEpisode: "",
                    charactersEpisode: action.payload
                }
            case GET_CHARACTERS_EPISODE_FAIL:
                return {
                    ...state,
                    loadingcharactersEpisode: false,
                    errorLoadcharactersEpisode: action.error,
                    charactersEpisode: new Array<CharacterModel>()
                }
            
        
            default:
                return state;
        }
    }