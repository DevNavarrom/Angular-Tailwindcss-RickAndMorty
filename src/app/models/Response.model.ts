import { InfoResponse } from './infoResponse.model';
import { CharacterModel } from './character.model';

export class ResponseModel {

    info: InfoResponse;
    results: any[];

    constructor() {
        this.results = new Array<any>();
    }
    
}