import { IImage } from './article';

export interface ITopRated {
    title: string;
    subTitle: string;
    items: IChart[];
    quickLinks: ILink[];
}

export interface IChart {
    order: string;
    name: string;
    id: string;
    year: number;
    image: IImage;
    rating: IRating;
    raking: IRanking;
    weeks: string;
    weekend: string;
    gross: string;
}

export interface IRating {
    value: number;
    text: string;
}

export interface IRanking {
    value: string;
    velocity: string;
    up: boolean;
}

export interface ILink {
    name: string;
    url: string;
    genre: string;
}
