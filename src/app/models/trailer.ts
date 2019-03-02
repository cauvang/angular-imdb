import { IImage } from './article';

export interface ITrailer {
    image: IImage;
    listId: string;
    subTitle: string;
    title: string;
    videoId: string;
}

export interface IGetTrailerResponse {
    adult: boolean;
    backupPosterUrl: string;
    description: string;
    directorNames: string[];
    imageOverlayHoverUrl: string;
    imageOverlayUrl: string;
    posterUrl: string;
    slateUrl: string;
    starNames: string[];
    titleId: string;
    titleName: string;
    titleNameWithYear: string; 
    titleUrl: string; 
    trailerLength: number;
    trailerName: string;
    videoId: string;
    videoUrl: string;
    image:IImage;
}