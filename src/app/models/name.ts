import { IImage } from './article';
import { IMovie, IPerson } from './movies';
import { INews } from './news';
import { ILink } from './chart';
import { IMenuList, IUser, IUrl } from './title';

export interface IName {
    heroContent: IContent;
    menu: IMenuList;
    id: string;
    name: string;
    bio: string;
    heroImage: IImage;
    heroVideo: IVideo;
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
    //bio
    spouses: IPerson;
    quotes: string[];

}

export interface IContent {
    name: string;
    image: IImage;
    text: string;
    source: IImage;
}

export interface IVideo {
    id: string;
    name: string;
    poster: IImage;
    image: IImage;
    playlistId: string;
    caption: string;
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

export interface INameType {
    item: INameDetail;
    items: INameDetailList[];
    userList: IUser[];
    menu: IMenuList[];
    seeAlso: IUrl[];
}


export interface INameDetail {
    id: string;
    image: IImage;
    title: string;
    subTitle: string;
}

export interface INameDetailList {
    name: string;
    items: ITextList[];
}

export interface ITextList {
    leftText: string;
    rightText: string;
    text: string;
}