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
    casts: ICast[];
    relatedNews: INews[];
    editorialList: IUser[];
    userList: IUser[];
    userPolls: IPerson[];
    featuredList: IArticle;
}

export interface IReview {
    // itemReviewed.url
    dateCreated: string;
    inLanguage: string;
    name: string;
    reviewBody: string;
    // reviewRating //worstRating bestRating ratingValue
}

export interface ICast extends IPerson {
    character: ICharacter[];
}

export interface ICharacter {
    characterName: string;
    characterId: string;
}

export interface IUser extends IPerson {
    meta: string;
}