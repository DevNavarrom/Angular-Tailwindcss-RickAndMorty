import { EpisodeModel } from '../../models/episode.model';
import * as episodeActions from '../actions/episode.actions';
import { GET_EPISODES, GET_EPISODES_OKAY, GET_EPISODES_FAIL } from '../actions/episode.actions';



export interface EpisodeState {

    episodes: EpisodeModel[];
    loadingEpisodes: boolean;
    errorLoadEpisodes: string;

}

const stateInitial: EpisodeState = {

    episodes : new Array<EpisodeModel>(),
    loadingEpisodes : false,
    errorLoadEpisodes : ""

}

export function episodesReducer( 
    state: EpisodeState = stateInitial, action: episodeActions.actions ) : EpisodeState {

        switch ( action.type ) {
            case GET_EPISODES:
                return {
                    ...state,
                    loadingEpisodes: true,
                    errorLoadEpisodes: ""
                }
            case GET_EPISODES_OKAY:
                return {
                    ...state,
                    loadingEpisodes: false,
                    errorLoadEpisodes: "",
                    episodes: action.payload.results
                }
            case GET_EPISODES_FAIL:
                return {
                    ...state,
                    loadingEpisodes: false,
                    errorLoadEpisodes: action.error,
                    episodes: new Array<EpisodeModel>()
                }
        
            default:
                return state;
        }
    }