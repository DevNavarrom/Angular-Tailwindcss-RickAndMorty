import { CharacterState } from './reducers/character.reducers';
import { EpisodeState } from './reducers/episode.reducers';




export interface AppState {
    
    charactersState: CharacterState;
    episodesSatate: EpisodeState;

}