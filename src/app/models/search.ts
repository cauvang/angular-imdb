import { IPerson, IMovie } from './movies';
import { IImage } from './article';

export interface ISearchResult<T> {
    query: IQuery;
    pageSize: number;
    header: string;
    totalItems: number;
    totalPages: number;
    sorting: ISorting[];
    items: T[];
    nextPage: string;
    prevPage: string;
}

export interface IQuery {
    [x: string]: string
}

export interface ISorting {
    text: string;
    url: string;
    isCurrent: boolean;
}

export interface ISearchTitle {
    actors: IPerson[];
    certificate: string;
    contentRating: string;
    directors: IPerson[];
    genres: string;
    gross: number;
    id: string;
    image: IImage;
    metascore: string;
    name: string;
    runtime: string;
    shortDescription: string;
    votes: number;
    year: number;
}
export interface ISearchName extends IPerson {
    index: string;
    movie: ICastMovie;
}
export interface ICastMovie {
    cast: string;
    name: string;
    id: string;
}