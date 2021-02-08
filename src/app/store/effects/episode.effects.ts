import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EpisodeService } from '../../services/episode.service';
import { GET_EPISODES, GetEpisodesOkayAction, GetEpisodesFailAction, GET_EPISODES_CHARACTER, GetEpisodesCharacterAction, GetEpisodesCharacterOkayAction, GetEpisodesCharacterFailAction, GET_EPISODE, GetEpisodeAction, GetEpisodeOkayAction, GetEpisodeFailAction } from '../actions/episode.actions';
import { ResponseModel } from '../../models/response.model';
import { EpisodeModel } from "src/app/models/episode.model";




@Injectable()
export class EpisodeEffects {

    public constructor(
        private actions$: Actions,
        private _service: EpisodeService,
    ) {}

    @Effect()
    loadEpisodes$: Observable<Action> = this.actions$.pipe(
        ofType( GET_EPISODES ),
        mergeMap( () => {

            return this._service.getEpisodes().pipe(
                map( (resp: ResponseModel) => {
                    if (resp.results.length) {
                        return new GetEpisodesOkayAction(resp);
                    }
                }),
                catchError( (err) => {
                    return of( new GetEpisodesFailAction(err) );
                })
            );

        })
    );

    @Effect()
    getEpisode$: Observable<Action> = this.actions$.pipe(
        ofType( GET_EPISODE ),
        mergeMap( ( action: GetEpisodeAction) => {

            return this._service.getEpisode(action.id).pipe(
                map( (resp: EpisodeModel) => {
                    if (resp) {
                        return new GetEpisodeOkayAction(resp);
                    }
                }),
                catchError( (err) => {
                    return of( new GetEpisodeFailAction(err) );
                })
            );

        })
    );

    @Effect()
    getEpisodesCharacter$: Observable<Action> = this.actions$.pipe(
        ofType( GET_EPISODES_CHARACTER ),
        mergeMap( (action: GetEpisodesCharacterAction) => {

            return this._service.getEpisodesCharacter(action.ids).pipe(
                map( (resp: any) => {
                    if (resp) {
                        return new GetEpisodesCharacterOkayAction(resp);
                    }
                }),
                catchError( (err) => {
                    return of( new GetEpisodesCharacterFailAction(err) );
                })
            );

        })
    );
    
}