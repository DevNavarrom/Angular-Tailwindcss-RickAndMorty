import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  //Variable de entorno referente al endpoint
  protected url : string = environment.apiURL;
  
  constructor( private http: HttpClient ) { }

  getCharacters() {
    return this.http.get<ResponseModel>( this.url + '/episode' );
  }
  
}
