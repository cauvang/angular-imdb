import { IImage } from './article';
import { ITrailer } from './trailer';

export interface IGetMovieResponse {
    name: string;
    items: IMovie[];
}

export interface IMovie {
    name: string;
    description: string;
    poster: IImage;
    certImage: IImage;
    genere: string[];
    directors: IPerson[];
    stars: IPerson[];
    length: string;
    trailer: ITrailer;
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
    role: string;


}

export interface IPerson {
    name: string;
    id: string;
    description: string;
    image: IImage;
    date: string;
    year: string;
}




