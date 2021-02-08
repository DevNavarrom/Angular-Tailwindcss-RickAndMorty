import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EpisodeService } from '../../services/episode.service';
import { GET_EPISODES, GetEpisodesAction, GetEpisodesOkayAction, GetEpisodesFailAction } from '../actions/episode.actions';
import { ResponseModel } from '../../models/response.model';




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

            return this._service.getCharacters().pipe(
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
    
}