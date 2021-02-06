import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
// import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';

//Services
import { CharacterService } from './services/character.service';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
