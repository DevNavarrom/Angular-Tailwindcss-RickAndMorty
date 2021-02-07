import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.store';
import { CharacterService } from '../../services/character.service';
import { CharacterModel } from '../../models/character.model';
import { GetCharactersAction } from '../../store/actions/character.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: CharacterModel[];
  subscription: Subscription;

  constructor(
    private store: Store<AppState>
  ) {
    this.characters = new Array<CharacterModel>();
  }

  ngOnInit(): void {

    if (this.characters.length === 0) {
      this.store.dispatch( new GetCharactersAction() );
    }

    this.subscription = this.store.select( state => state.characters ).subscribe(state => {

      if (this.characters.length === 0) {
        this.characters = state.characters;
      }
    });

  }

}
