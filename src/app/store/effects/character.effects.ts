import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CharacterService } from '../../services/character.service';
import { GET_CHARACTERS, GetCharactersOkayAction, GetCharactersFailAction, GET_CHARACTER, GetCharacterAction, GetCharacterOkayAction, GetCharacterFailAction, GET_CHARACTERS_EPISODE, GetCharactersEpisodeAction, GetCharactersEpisodeOkayAction, GetCharactersEpisodeFailAction, GetCharactersAction } from '../actions/character.actions';
import { ResponseModel } from '../../models/response.model';
import { CharacterModel } from "src/app/models/character.model";




@Injectable()
export class CharacterEffects {

    public constructor(
        private actions$: Actions,
        private _service: CharacterService,
    ) {}

    @Effect()
    loadCharacters$: Observable<Action> = this.actions$.pipe(
        ofType( GET_CHARACTERS ),
        mergeMap( (action: GetCharactersAction) => {

            if (!action.page) {
                return this._service.getCharacters().pipe(
                    map( (resp: ResponseModel) => {
                        if (resp.results.length) {
                            return new GetCharactersOkayAction(resp);
                        }
                    }),
                    catchError( (err) => {
                        return of( new GetCharactersFailAction(err) );
                    })
                );
            }
        })
    );

    @Effect()
    getCharacter$: Observable<Action> = this.actions$.pipe(
        ofType( GET_CHARACTER ),
        mergeMap( (action: GetCharacterAction) => {

            return this._service.getCharacter(action.id).pipe(
                map( (resp: CharacterModel) => {
                    if (resp) {
                        return new GetCharacterOkayAction(resp);
                    }
                }),
                catchError( (err) => {
                    return of( new GetCharacterFailAction(err) );
                })
            );
        })
    );

    @Effect()
    getCharactersEpisode$: Observable<Action> = this.actions$.pipe(
        ofType( GET_CHARACTERS_EPISODE ),
        mergeMap( (action: GetCharactersEpisodeAction) => {

            return this._service.getCharactersEpisode(action.ids).pipe(
                map( (resp: any) => {
                    if (resp) {
                        return new GetCharactersEpisodeOkayAction(resp);
                    }
                }),
                catchError( (err) => {
                    return of( new GetCharactersEpisodeFailAction(err) );
                })
            );

        })
    );

    @Effect()
    loadNextPage$: Observable<Action> = this.actions$.pipe(
        ofType( GET_CHARACTERS ),
        mergeMap( ( action: GetCharactersAction) => {

            return this._service.getNextPage(action.page).pipe(
                map( (resp: ResponseModel) => {
                    if (resp.results.length) {
                        return new GetCharactersOkayAction(resp);
                    }
                }),
                catchError( (err) => {
                    return of( new GetCharactersFailAction(err) );
                })
            );
        })
    );
    
}