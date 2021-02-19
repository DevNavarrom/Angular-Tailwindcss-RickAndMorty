import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

//Routes
// import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';

//Services
import { CharacterService } from './services/character.service';
import { EpisodeService } from './services/episode.service';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//store
import { charactersReducer } from './store/reducers/character.reducers';
import { CharacterEffects } from './store/effects/character.effects';
import { episodesReducer } from './store/reducers/episode.reducers';
import { EpisodeEffects } from './store/effects/episode.effects';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { EpisodeDetailComponent } from './components/episodes/episode-detail/episode-detail.component';

import { environment } from '../environments/environment.prod';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CharactersComponent,
    EpisodesComponent,
    CharacterDetailComponent,
    EpisodeDetailComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    StoreModule.forRoot(
      {
        characters: charactersReducer,
        episodes: episodesReducer
      }
    ),
    EffectsModule.forRoot(
      [
        CharacterEffects,
        EpisodeEffects
      ]
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    InfiniteScrollModule
  ],
  providers: [
    CharacterService,
    EpisodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
