import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { IGetShowtimeMovieResponse, IGetShowtimeTheaterResponse } from '../models/showtimes';

@Injectable({
  providedIn: 'root'
})
export class ShowtimesService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getShowtimesTheater(location: string, date: string): Observable<IGetShowtimeTheaterResponse> {
    var url = this.appConfig.rootURL + "showtimes";
    if (location != null)
      url += '/' + location;//AU/3026/
    if (date != null)
      url += '/' + date; //2019 - 03 - 13
    return this.http.get<IGetShowtimeTheaterResponse>(url);
  }

  public getShowtimesMovie(location: string, date: string, queryString: string = ""): Observable<IGetShowtimeMovieResponse> {
    {
      var url = this.appConfig.rootURL + "showtimes/location";
      if (location != null)
        url += '/' + location;//AU/3026/
      if (date != null)
        url += '/' + date; //2019 - 03 - 13
      if (queryString != null)
        url += "?" + queryString;
      return this.http.get<IGetShowtimeMovieResponse>(url);
    }
  }

}

