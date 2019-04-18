import { IImage } from './article';

export interface IPhoto {
    display: string;
    totalCount: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
    items: IGallery[];
    filters: IFilter[];

}

export interface IGallery {
    title: string;
    galleryId: string;
    viewerId: string;
    image: IImage;
}

export interface IFilter {
    filterType: "string";
    items: IType[];
}

export interface IType {
    name: string;
    refine: string;
    count: string;
}