import { InfoResponse } from './infoResponse.model';
import { CharacterModel } from './character.model';

export class ResponseModel {

    info: InfoResponse;
    results: CharacterModel[];

    constructor() {
        this.results = new Array<CharacterModel>();
    }
    
}