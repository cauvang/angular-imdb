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
    var url = this.appConfig.rootURL + "showtimes";
    if (location != null)
      url += '/' + location.country + '/' + location.postcode;//AU/3026/
    if (date != null)
      url += '/' + date; //2019 - 03 - 13
    return this.http.get<IGetShowtimeTheaterResponse>(url);
  }

  public getShowtimesMovie(location: ILocation, date: string, queryString: string = ""): Observable<IGetShowtimeMovieResponse> {
    {
      var url = this.appConfig.rootURL + "showtimes/location";
      if (location != null)
        url += '/' + location.country + '/' + location.postcode;//AU/3026/
      if (date != null)
        url += '/' + date; //2019 - 03 - 13
      if (queryString != null)
        url += "?" + queryString;
      return this.http.get<IGetShowtimeMovieResponse>(url);
    }
  }

  public getShowtimesTitle(location: ILocation, date: string, id: string): Observable<ITitle> {
    var url = this.appConfig.rootURL + "showtimes/title/" + id;
    if (location != null)
      url += '/' + location.country + '/' + location.postcode;//AU/3026/
    if (date != null)
      url += '/' + date; //2019 - 03 - 13
    return this.http.get<ITitle>(url);
  }

  public getShowtimesCinema(id: string): Observable<ITheater> {
    var url = this.appConfig.rootURL + "showtimes/cinema/" + id;
    return this.http.get<ITheater>(url);
  }

}

