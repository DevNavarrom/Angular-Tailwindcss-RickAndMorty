import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.store';
import { EpisodeModel } from '../../../models/episode.model';
import { GetEpisodeAction } from '../../../store/actions/episode.actions';
import { CharacterModel } from '../../../models/character.model';
import { getIds } from '../../../utils/constants';
import { GetCharactersEpisodeAction } from 'src/app/store/actions/character.actions';


@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

  subscription: Subscription;
  episode: EpisodeModel;

  idsCharacter: number[];
  characters: CharacterModel[];
  
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) {
    this.characters = new Array<CharacterModel>();
    this.idsCharacter = new Array<number>();
  }

  ngOnInit(): void {

    this.route.url.subscribe((data: UrlSegment[]) => {
      
      let segment = data[1];

      this.store.dispatch( new GetEpisodeAction(parseInt(segment.path)) );

      this.subscription = this.store.select( state => state.episodes ).subscribe( state => {

        this.episode = state.episode;

        if (state.episode.characters.length > 0) {

          this.episode.characters.forEach((item) => {
            this.idsCharacter.push(parseInt(getIds(item)));
          });
  
          this.store.dispatch( new GetCharactersEpisodeAction(this.idsCharacter));

        }

      });

      this.subscription = this.store.select(state => state.characters).subscribe(state => {
        if (state.charactersEpisode.length > 0) {
          
          this.characters = state.charactersEpisode;

        }
      });

    });
  }

}
