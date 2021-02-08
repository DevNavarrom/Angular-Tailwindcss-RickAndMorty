import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/response.model';
import { EpisodeModel } from '../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  //Variable de entorno referente al endpoint
  protected url : string = environment.apiURL;
  
  constructor( private http: HttpClient ) { }

  getEpisodes() {
    return this.http.get<ResponseModel>( this.url + '/episode' );
  }

  getEpisode( id: number ) {
    return this.http.get<EpisodeModel>( this.url + '/episode/' + id );
  }

  getEpisodesCharacter( ids: number[] ) {
    return this.http.get<any>( this.url + '/episode/' + [ids] );
  }
  
}
