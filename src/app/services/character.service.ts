import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResponseModel } from '../models/response.model';
import { CharacterModel } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  //Variable de entorno referente al endpoint
  protected url : string = environment.apiURL;

  constructor( private http: HttpClient ) { }

  getCharacters() {
    return this.http.get<ResponseModel>( this.url + '/character' );
  }

  getCharacter( id: number ) {
    return this.http.get<CharacterModel>( this.url + '/character/' + id );
  }

}
