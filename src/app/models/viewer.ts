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