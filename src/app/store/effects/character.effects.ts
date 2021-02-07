import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CharacterService } from '../../services/character.service';
import { GET_CHARACTERS, GetCharactersAction, GetCharactersOkayAction, GetCharactersFailAction } from '../actions/character.actions';
import { ResponseModel } from '../../models/response.model';




@Injectable()
export class CharacterEffects {

    public constructor(
        private actions$: Actions,
        private _service: CharacterService,
    ) {}

    @Effect()
    loadCharacters$: Observable<Action> = this.actions$.pipe(
        ofType( GET_CHARACTERS ),
        mergeMap( () => {

            return this._service.getCharacters().pipe(
                map( (resp: ResponseModel) => {
                    console.log('<<<< GET_CHARACTERS >>>>')
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