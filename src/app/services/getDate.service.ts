import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GetDateService {
    constructor() { }

    public GetToday_DDMM() {
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth();

        return (dd < 10 ? "0" + dd : dd) + "-" + (mm < 9 ? "0" + (mm + 1) : (mm + 1));
    }

    public GetToday_YYYYMMDD() {
        const today = new Date();
        return this.GetDateFormat_YYYYMMDD(today);
    }

    public GetDateFormat_YYYYMMDD(date: Date) {
        const dd = date.getDate();
        const mm = date.getMonth();
        const yyyy = date.getFullYear();

        return yyyy + "-" + (mm < 9 ? "0" + (mm + 1) : (mm + 1)) + '-' + (dd < 10 ? "0" + dd : dd);
    }
}