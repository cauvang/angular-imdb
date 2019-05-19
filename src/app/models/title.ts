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
    dateCreated: string;
    inLanguage: string;
    name: string;
    reviewBody: string;
    // reviewRating //worstRating bestRating ratingValue
}

export interface IDetail extends IPerson {
    characters: ICharacter[];
    //credit
    credit: string;
    //trivia
    interestingCount: string;
    text: string;
}

export interface ICharacter {
    characterName: string;
    characterId: string;
}

export interface IUser extends IPerson {
    meta: string;
}

export interface ITitleDetail {
    item: ITitle;
    items: IDetailList[];
}

export interface IDetailList {
    name: string;
    items: IDetail[];
}



export interface IMenuList {
    name: string;
    items: IMenu[];
}

export interface IMenu {
    name: string;
    url: string;
    noData: boolean;
}