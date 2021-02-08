import { EpisodeModel } from '../../models/episode.model';
import * as episodeActions from '../actions/episode.actions';
import { GET_EPISODES, GET_EPISODES_OKAY, GET_EPISODES_FAIL, GET_EPISODE, GET_EPISODE_OKAY, GET_EPISODE_FAIL, GET_EPISODES_CHARACTER, GET_EPISODES_CHARACTER_OKAY, GET_EPISODES_CHARACTER_FAIL } from '../actions/episode.actions';



export interface EpisodeState {

    episodes: EpisodeModel[];
    loadingEpisodes: boolean;
    errorLoadEpisodes: string;

    episode: EpisodeModel;
    loadingEpisode: boolean;
    errorLoadEpisode: string;

    episodesCharacter: EpisodeModel[];
    loadingEpisodesCharacter: boolean;
    errorLoadEpisodesCharacter: string;

}

const stateInitial: EpisodeState = {

    episodes : new Array<EpisodeModel>(),
    loadingEpisodes : false,
    errorLoadEpisodes : "",

    episode : new EpisodeModel(),
    loadingEpisode : false,
    errorLoadEpisode : "",

    episodesCharacter : new Array<EpisodeModel>(),
    loadingEpisodesCharacter : false,
    errorLoadEpisodesCharacter : ""

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
            case GET_EPISODE:
                return {
                    ...state,
                    loadingEpisode: true,
                    errorLoadEpisode: ""
                }
            case GET_EPISODE_OKAY:
                return {
                    ...state,
                    loadingEpisode: false,
                    errorLoadEpisode: "",
                    episode: action.payload
                }
            case GET_EPISODE_FAIL:
                return {
                    ...state,
                    loadingEpisode: false,
                    errorLoadEpisode: action.error,
                    episode: new EpisodeModel()
                }
            case GET_EPISODES_CHARACTER:
                return {
                    ...state,
                    loadingEpisodesCharacter: true,
                    errorLoadEpisodesCharacter: ""
                }
            case GET_EPISODES_CHARACTER_OKAY:
                return {
                    ...state,
                    loadingEpisodesCharacter: false,
                    errorLoadEpisodesCharacter: "",
                    episodesCharacter: action.payload
                }
            case GET_EPISODES_CHARACTER_FAIL:
                return {
                    ...state,
                    loadingEpisodesCharacter: false,
                    errorLoadEpisodesCharacter: action.error,
                    episodesCharacter: new Array<EpisodeModel>()
                }
        
            default:
                return state;
        }
    }