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

  public getShowtimesMovie(): Observable<IGetShowtimeMovieResponse> {
    return this.http.get<IGetShowtimeMovieResponse>(this.appConfig.rootURL + "showtimes/location");
  }

  public getShowtimesTheater(): Observable<IGetShowtimeTheaterResponse> {
    return this.http.get<IGetShowtimeTheaterResponse>(this.appConfig.rootURL + "showtimes");
  }

}


