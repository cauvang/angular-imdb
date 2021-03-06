import { IImage } from './article';

export interface IGetNewsResponse {
    next: string;
    items: INews[];
}
export interface INews {
    date: Date;
    auhor: string;
    title: string;
    url: string;
    id: string;
    content: string;
    image: IImage;
    source: ISource;
    name: string;
}

export interface ISource {
    name: string;
    url: string;
}

export interface INewsDetail {
    item: INews;
    similarNews: ISimilar[];
}

export interface ISimilar {
    name: string;
    newsItems: INews[];
}

