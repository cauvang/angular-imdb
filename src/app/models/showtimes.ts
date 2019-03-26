import { IImage } from './article';
import { IMovie } from './movies';

export interface IGetShowtimeMovieResponse {
    items: IMovie[];
    metadata: IMetadata[];
    totalCount: number;
}

// export interface IShowtimeMovie {
//     id: string;
//     name: string;
//     rank: number;
//     image: IImage;
// }

export interface IMetadata {
    categoryName: string;
    searchKey: string;
    values: IValue[];
}

export interface IValue {
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
}

export interface IAddress {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: number;
    telephone: string;
    address: string;
}