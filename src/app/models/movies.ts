import { IImage } from './article';

export interface IGetMovieResponse {
    name: string;
    items: IMovie[];
}

export interface IMovie {
    name: string;
    description: string;
    poster: IImage;
    certImage: IImage;
    generes: string[];
    directors: IPerson[];
    stars: IPerson[];
    lenght: string;
    trailer: IId;
    metascore: string;
}

export interface IPerson {
    name: string;
    id: string;
}

export interface IId {
    id: string;
}

