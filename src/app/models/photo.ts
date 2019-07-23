import { IImage } from './article';
import { ITitleDetail } from './title';

export interface IPhoto {
    display: string;
    totalCount: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
    items: IGallery[];
    filters: IFilter[];
    seeMore: ISeeMore;
    header: string;
    currentFilter: string;

    item: ITitleDetail;
    storyline: string;
}

export interface IGallery {
    title: string;
    galleryId: string;
    viewerId: string;
    image: IImage;
    //video
    id: string;
    thumbnail: IImage;
}

export interface IFilter {
    filterType: 'string';
    items: IType[];
}

export interface IType {
    name: string;
    refine: string;
    count: string;
    url: string;
    selected: boolean;
}
export interface ISeeMore {
    text: string;
    url: string;
}
