
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';

const APP_ROUTES: Routes = [
    { path: 'episodes', component: EpisodesComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'character/:id', component: CharacterDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'episodes' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);