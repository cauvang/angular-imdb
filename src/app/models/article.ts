export interface IArticle {
    videoId: string;
    listId: string;
    images: IImage;
    title: string;
    content: string;
}

export interface IImage {
    url: string;
    title: string;
}
