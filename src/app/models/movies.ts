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
    length: string;
    trailer: IId;
    metascore: string;
    id: string;
    certRating: string;
    ratingValue: string;
    ratingCount: string;
    boxOffice: string;
    duration: string;
    showtimes: string[];
    image: IImage;
    rank: string;
    showtimes3D: string[];
    year: string;
}

export interface IPerson {
    name: string;
    id: string;
}

export interface IId {
    id: string;
}


