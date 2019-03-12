import { IImage } from './article';
import { IMovie } from './movies';

export interface IGetShowtimeMovieResponse {
    items: IShowtimeMovie[];
    metadata: IMetadata[];
    totalCount: number;
}

export interface IShowtimeMovie {
    id: string;
    name: string;
    rank: number;
    image: IImage;
}

export interface IMetadata {
    categoryName: string;
    values: IValue[];
}

export interface IValue {
    name: string;
    count: number;
    checked: boolean;
}

export interface IGetShowtimeTheaterResponse {
    items: IShowtimeGroup[];
    count: number;
}

export interface IShowtimeGroup {
    groupName: string;
    items: IShowtimeTheater[];
}

export interface IShowtimeTheater {
    name: string;
    id: string;
    address: IAddress;
    movies: IMovie[];
}

export interface IAddress {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: number;
    telephone: string;
    address: string;
    movies: IMovies[];
}

export interface IMovies {
    name: string;
    id: string;
    metascore: string;
    ratingValue: string;
    ratingCount: string;
    duration: string;
    showtimes: string[];
    image: IImage;
}

