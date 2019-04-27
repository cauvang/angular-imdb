import { IPerson } from './movies';
import { IImage } from './article';
import { IMetadata } from './showtimes';

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
    prevLink: string; ///
    nextLink: string;///

    start: number;
    to: number;
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

    index: string;
    genre: string[];
    resultType: string;
    resultContent: string[];
}
export interface ISearchName extends IPerson {
    index: string;
    movie: ICastMovie;

    image: IImage;
    name: string;
    id: string;
    relatedItem: ICastMovie;
    resultType: string;
    resultContent: string[];

}
export interface ICastMovie {
    cast: string;
    name: string;
    id: string;

    role: string;///
}

export interface ISearchKeyword {
    metadata: IMetadata[];
    header: string;
    query: IQuery;
    paging: string;
    items: ISearchTitle[];
    totalDisplay: string;
    totalCount: number;
    fromCount: number;
    toCount: number;
    nextPage: string;
}