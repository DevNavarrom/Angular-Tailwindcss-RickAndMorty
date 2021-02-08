
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { EpisodeDetailComponent } from './components/episodes/episode-detail/episode-detail.component';

const APP_ROUTES: Routes = [
    { path: 'episodes', component: EpisodesComponent },
    { path: 'episode/:id', component: EpisodeDetailComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'character/:id', component: CharacterDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'episodes' },
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);