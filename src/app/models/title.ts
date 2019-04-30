import { IMovie, IPerson } from './movies';
import { IArticle, IImage } from './article';
import { INews } from './news';
import { IVideo } from './name';
import { ITrailer } from './trailer';

export interface ITitle extends IMovie {
    genres: string;
    contentRating: string;
    trailer: ITrailer;
    datePublished: string;
    storyline: string;
    plotAuthor: string;
    keywords: string;
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
    videoCounts: string;
    imageCounts: string;
    awards: string;
    creators: IPerson[];
    topReview: IReview;
    videos: IVideo;
    images: IImage[]; //
    casts: ICast[];
    relatedNews: INews[];
    editorialList: ICast[];
    userList: ICast[];
    userPolls: ICast[];
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

export interface ICast {
    image: IImage;
    name: string;
    id: string;
    characterName: string;
    characterId: string;
    meta: string;
}
