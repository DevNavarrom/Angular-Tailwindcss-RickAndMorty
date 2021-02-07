

export class EpisodeModel {

    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: Date;

    constructor() {
        this.characters = new Array<string>();
    }
    
}