import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GetCharacterAction } from 'src/app/store/actions/character.actions';
import { AppState } from 'src/app/store/app.store';
import { CharacterModel } from '../../../models/character.model';
import { GetEpisodesCharacterAction } from '../../../store/actions/episode.actions';
import { EpisodeModel } from '../../../models/episode.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  subscription: Subscription;
  character: CharacterModel;

  idsEpisodes: number[];
  episodes: EpisodeModel[];
  
  constructor( 
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) {
    this.character = new CharacterModel();
    this.episodes = new Array<EpisodeModel>();
    this.idsEpisodes = new Array<number>();
  }

  ngOnInit(): void {

    this.route.url.subscribe((data: UrlSegment[]) => {
      let segment = data[1];

      this.getCharacter(parseInt(segment.path));

      this.subscription = this.store.select( state => state.characters ).subscribe( state => {
        this.character = state.character;

        if (state.character.episode.length > 0) {
          
          this.character.episode.forEach((item) => {
            this.idsEpisodes.push(parseInt(this.getIds(item)));
          });
  
          this.store.dispatch( new GetEpisodesCharacterAction(this.idsEpisodes));

          
        }

        /*  */

      });

      this.subscription = this.store.select(state => state.episodes).subscribe(state => {
        if (state.episodesCharacter.length > 0) {
          /* state.episodesCharacter.forEach( item => {
            this.episodes.push(item.name);
          }); */
          this.episodes = state.episodesCharacter;

          console.log(this.episodes);
        }
      });

    });
  }

  getCharacter( id: number ) {

    this.store.dispatch( new GetCharacterAction(id) );
    
  }

  getIds(string) {
    let tmp = string.split("");
    let map = tmp.map((current) => {
      if (!isNaN(parseInt(current))) {
        return current;
      }
    });
  
    let numbers = map.filter((value) => {
      return value != undefined;
    });
  
    return numbers.join("");
  }

}
