import { IPerson } from './movies';
import { IImage } from './article';

export interface ISearch {
    query: IQuery;
    pageSize: number;
    header: string;
    totalItems: number;
    totalPages: number;
    sorting: ISorting[];
    items: IPage[];
    nextPage: string;

}

export interface IQuery {
    genres: string;
    count: string;
    start: string;
    ref_: string;
}

export interface ISorting {
    text: string;
    url: string;
    isCurrent: boolean;
}

export interface IPage {
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