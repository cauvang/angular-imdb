import { IQuery } from './search';

export interface IFinder {
    query: IQuery;
    results: IResultResponse[];
}

export interface IResultResponse {
    header: string;
    items: IResult[];
}

export interface IResult {
    name: string;
    text: string;
}
