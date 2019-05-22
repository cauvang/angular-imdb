import { ITitle, IUser } from './title';

export class IList {
    item: ITitle;
    items: IUser[];
    totalItems: number;
    currentPage: string;
    totalPage: number;
    pageSize: number;
}