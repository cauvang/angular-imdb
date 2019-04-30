import { IImage } from './article';
export interface IGenre {
    image: IImage;
    url: string;
    title: string;
}
export interface IGenreResponse {
    genres: IGenre[];
    groupLinks: IGroupLink[];
}

export interface IGroupLink {
    name: string;
    links: ILink[];
}

export interface ILink {
    url: string;
    title: string;
}
