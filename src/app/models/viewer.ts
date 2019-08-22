
export interface IMediaViewer {
    allImages: IImageViewer[];
    baseUrl: string;
    galleryIndexUrl: string;
    galleryTitle: string;
    id: string;
    totalImageCount: number;
}

export interface IImageViewer {
    editTagsLink: string;
    id: string;
    h: number;
    msrc: string;
    src: string;
    w: number;
    imageCount: number;
    altText: string;
    caption: string;
    copyright: string
    imageType: string;
    relatedNames: string[];
    relatedTitles: string[];
    reportImageLink: string;
    tracking: string;
}

export interface IVideoViewer {
    videoPlayerObject: IVideoObject;
    alternativeData: IAlternative;
}

export interface IVideoObject {
    video: IVideoPlayer;
}

export interface IVideoPlayer {
    replayable: boolean;
    responsive: boolean;
    autoPlay: boolean;
    height: number;
    width: number;
    videoInfoList: IVideoInfo[];
}

export interface IVideoInfo {
    videoMimeType: string;
    videoUrl: string;
}
export interface IDictionary<T> {
    [key: string]: T
}
export interface IAlternative {
    ribbons: IDictionary<IRibbon>;
    videos: IVideos;
}

export interface IRibbon {
    inWL: boolean;
    tconst: string;
}

export interface IVideos {
    playlists: IDictionary<IPlaylist>;
    primaryRelations: IDictionary<IRelation>;
    videoMetadata: IDictionary<IVideoMetadata>;
}

export interface IPlaylist {
    id: string;
    title: string;
}

export interface IRelation {
    id: string;
    name: string;
    page: string;
    poster: IPoster;
}
export interface IPoster {
    height: number;
    url: string;
    url2x: string;
    width: number;
}
export interface IVideoMetadata {
    description: string;
    canonicalUrl: string;
    primaryConst: string;
    title: string;

}