import { OriginModel } from './origin.model';
import { LocationModel } from './location.model';

export class CharacterModel {

    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginModel;
    location: LocationModel;
    image: string;
    episode: string[];
    url: string;
    created: Date;
    
}