import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { EpisodeModel } from 'src/app/models/episode.model';
import { AppState } from 'src/app/store/app.store';
import { GetEpisodesAction } from '../../store/actions/episode.actions';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes: EpisodeModel[];
  subscription: Subscription;
  
  constructor( private store: Store<AppState> ) {
    this.episodes = new Array<EpisodeModel>();
  }

  ngOnInit(): void {

    if (this.episodes.length === 0) {
      this.store.dispatch( new GetEpisodesAction() );
    }

    this.subscription = this.store.select( state => state.episodes ).subscribe(state => {

      if (this.episodes.length === 0) {
        this.episodes = state.episodes;
      }
    });
    
  }

}