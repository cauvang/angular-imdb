import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { IGetShowtimeMovieResponse, IGetShowtimeTheaterResponse, ITitle, ILocation, ITheater } from '../models/showtimes';

@Injectable({
  providedIn: 'root'
})
export class ShowtimesService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getShowtimesTheater(location: ILocation, date: string): Observable<IGetShowtimeTheaterResponse> {
    let url = this.appConfig.rootURL + 'showtimes';
    url = this.getURL(url, location, date, null);
    return this.http.get<IGetShowtimeTheaterResponse>(url);
  }

  public getShowtimesMovie(location: ILocation, date: string, queryString: string = ''): Observable<IGetShowtimeMovieResponse> {
    {
      let url = this.appConfig.rootURL + 'showtimes/location';
      url = this.getURL(url, location, date, queryString);
      return this.http.get<IGetShowtimeMovieResponse>(url);
    }
  }

  public getShowtimesTitle(location: ILocation, date: string, id: string): Observable<ITitle> {
    let url = this.appConfig.rootURL + 'showtimes/title/' + id;
    url = this.getURL(url, location, date, null);
    return this.http.get<ITitle>(url);
  }

  public getShowtimesCinema(location: ILocation, date: string, id: string, queryString: string = ''): Observable<ITheater> {
    let url = this.appConfig.rootURL + 'showtimes/cinema/' + id;
    url = this.getURL(url, location, date, queryString);
    return this.http.get<ITheater>(url);
  }

  private getURL(url: string, location: ILocation, date: string, queryString: string = '') {
    if (location != null) // AU/3026/
      url += '/' + location.country + '/' + location.postcode;

    if (date != null) // 2019 - 03 - 13
      url += '/' + date;

    if (queryString != null)
      url += '?' + queryString;

    return url;
  }
}

