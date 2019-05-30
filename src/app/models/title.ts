import { IMovie, IPerson } from './movies';
import { IArticle, IImage } from './article';
import { INews } from './news';
import { IVideo } from './name';
import { ITrailer } from './trailer';

export interface ITitle extends IMovie {
    genres: string[];
    genre: string;
    contentRating: string;
    trailer: ITrailer;
    datePublished: string;
    storyline: string;
    plotAuthor: string;
    keywords: string[];
    quotes: string;
    trivia: string;
    goofs: string;
    details: string;
    soundtracks: string;
    crazyCredits: string;
    alternativeVersions: string;
    connections: string;
    userReviews: string;
    externalReviews: string;
    popularity: string;
    popularityVelocity: number;
    velocityDown: boolean;
    videoCounts: number;
    imageCounts: number;
    awards: string;
    creators: IPerson[];
    topReview: IReview;
    videos: IVideo;
    casts: IDetail[];
    relatedNews: INews[];
    editorialList: IUser[];
    userList: IUser[];
    userPolls: IPerson[];
    featuredList: IArticle;
    similarTitles: ITitle[];
}

export interface IReview {
    author: IPerson;
    dateCreated: string;
    inLanguage: string;
    name: string;
    reviewBody: string;
    reviewRating: IReviewRating;
}

export interface IReviewRating {
    worstRating: string;
    bestRating: string;
    ratingValue: string;
}
export interface IDetail extends IPerson {
    characters: ICharacter[];
    //credit
    credit: string;
    //trivia ; goofs
    interestingCount: string;
    text: string;
    //releaseinfo
    regionName: string;
    regionId: string;
    releaseDate: string;
    attributes: string;
    //companycredits
    //externalsites
    url: string;
    //technical
    value: string;
    //locations
    interesting: string;
    subText: string;
    //movieconnections
    year: string;
    //video
    thumbnail: string;
    title: string;
    //plot summary
    author: string;
}

export interface ICharacter {
    characterName: string;
    characterId: string;
}

export interface IUser extends IPerson {
    meta: string;
}

export interface ITitleType {
    item: ITitleDetail;
    items: IDetailList[];
    userList: IUser[];
    seeAlso: IUrl[];
}
export interface ITitleDetail {
    name: string;
    subTitle: string;
    id: string;
    image: IImage;
    year: string;
    menus: IMenuList[];
}

export interface IDetailList {
    name: string;
    items: IGroupDetail[];
}

export interface IGroupDetail {
    name: string;
    items: IDetail[];
}

export interface IUrl {
    name: string;
    url: string;
    key: string;
}

export interface IMenuList {
    name: string;
    items: IMenu[];
}

export interface IMenu {
    name: string;
    url: string;
    key: string;
    disabled: boolean;
}
