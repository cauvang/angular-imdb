export interface IArticle {
    videoId: string;
    listId: string;
    images: IImage;
    title: string;
    content: string;
}

export interface IImage {
    name: string;
    url: string;
    title: string;
    viewerId: string;
}
