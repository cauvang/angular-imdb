import { IMovie } from './movies';

export interface ICalendar {
    header: string;
    dates: IDate[];
    countries: ICountry[];
}

export interface IDate {
    name: string;
    items: IMovie;
}

export interface ICountry {
    name: string;
    region: string;
}