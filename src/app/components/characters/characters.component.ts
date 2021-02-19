import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.store';
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

  page: number;
  finishPage: number;

  constructor(
    private store: Store<AppState>
  ) {

    this.characters = new Array<CharacterModel>();
    this.page = 1;
    this.finishPage = 0;
    
  }

  ngOnInit(): void {
    
    if (this.characters.length === 0) {
      this.store.dispatch( new GetCharactersAction() );
    }

    this.subscription = this.store.select( state => state.characters ).subscribe(state => {

      if (this.characters.length === 0) {
        this.characters = state.characters;
        this.finishPage = state.pages;
      }
    });

  }

  getNextPage( cont: number ) {
    
    this.store.dispatch( new GetCharactersAction(cont) );
  }

  onScroll() {

    if (this.page < this.finishPage) {
      this.page++;
      this.getNextPage(this.page);
    }
  }

}
