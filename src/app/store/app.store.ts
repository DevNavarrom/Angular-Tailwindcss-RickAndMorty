import { CharacterState } from './reducers/character.reducers';
import { EpisodeState } from './reducers/episode.reducers';




export interface AppState {
    
    characters: CharacterState;
    episodes: EpisodeState;

}