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

        const ddmm = (dd < 10 ? "0" + dd : dd) + "-" + (mm < 9 ? "0" + (mm + 1) : (mm + 1));
        return ddmm;
    }

    public GetToday_YYYYMMDD() {
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth();
        const yyyy = today.getFullYear();

        const yyyymmdd = yyyy + "-" + (mm < 9 ? "0" + (mm + 1) : (mm + 1)) + '-' + (dd < 10 ? "0" + dd : dd);
        return yyyymmdd;
    }
}