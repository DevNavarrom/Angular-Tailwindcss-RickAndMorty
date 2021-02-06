import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResponseModel } from '../models/Response.model';

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

}
