import { IImage } from './article';

export interface IGetBirthdayResponse {
    totalItems: number;
    totalPage: number;
    currentPage: number;
    items: IBirthday[];
}

export interface IBirthday {
    name: string;
    id: string;
    description: string;
    image: IImage;
}
