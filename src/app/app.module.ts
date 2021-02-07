import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
// import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';

//Services
import { CharacterService } from './services/character.service';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//store
import { charactersReducer } from './store/reducers/character.reducers';
import { CharacterEffects } from './store/effects/character.effects';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharactersComponent } from './components/characters/characters.component';

import { environment } from '../environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    StoreModule.forRoot(
      {
        characters: charactersReducer
      }
    ),
    EffectsModule.forRoot(
      [
        CharacterEffects
      ]
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
