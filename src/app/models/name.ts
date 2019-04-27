import { IImage } from './article';
import { IMovie } from './movies';
import { INews } from './news';
import { ILink } from './chart';

export interface IName {
    id: string;
    name: string;
    bio: string;
    poster: IImage;
    bornOn: string;
    bornPlace: string;
    images: IImage[];
    totalImages: string;
    totalVideos: string;
    movies: IMovie[];
    relatedNews: INews[];
    relatedVideos: IVideo[];
    filmography: IFilm[];
    personalQuote: string;
    trivial: string;
    personalDetails: IPerDetail;
}


export interface IVideo {
    id: string;
    name: string;
    poster: IImage;
}

export interface IFilm {
    sectionName: string;
    items: ISection[];
}

export interface ISection {
    year: string;
    name: string;
    id: string;
    type: string;
    role: string;
}

export interface IPerDetail {
    otherWorks: string;
    publicity: string;
    officialSite: ILink;
    height: string;
}

