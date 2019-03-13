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

  public getShowtimesTheater(): Observable<IGetShowtimeTheaterResponse> {
    return this.http.get<IGetShowtimeTheaterResponse>(this.appConfig.rootURL + "showtimes");
  }
  public getShowtimesMovie(location: string, date: string): Observable<IGetShowtimeMovieResponse> {
    {
      var url = this.appConfig.rootURL + "showtimes/location";
      if (location != null)
        url += '/' + location;//AU/3026/
      if (date != null)
        url += '/' + date; //2019 - 03 - 13
      return this.http.get<IGetShowtimeMovieResponse>(url);
    }
  }

}


