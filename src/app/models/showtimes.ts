import { IMovie } from './movies';

export interface IGetShowtimeMovieResponse {
    items: IMovie[];
    metadata: IMetadata[];
    totalCount: number;
}

export interface IMetadata {
    categoryName: string;
    searchKey: string;
    values: IValue[];
}

export interface IValue {
    id: string;
    name: string;
    count: number;
    checked: boolean;
}

export interface IGetShowtimeTheaterResponse {
    items: IGroup[];
    count: number;
}

export interface IGroup {
    groupName: string;
    items: ITheater[];
}

export interface ITheater {
    name: string;
    id: string;
    address: IAddress;
    movies: IMovie[];
    showtimes: string[];
    showtimes3D: string[];
}

export interface IAddress {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: number;
    telephone: string;
    address: string;
}

export interface ITitle {
    item: IMovie;
    items: IGroup[];
}

export interface ILocation {
    postcode: string;
    country: string;
}
