import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { IGetShowtimeResponse } from '../models/showtimes';

@Injectable({
  providedIn: 'root'
})
export class ShowtimesService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getShowtimes(): Observable<IGetShowtimeResponse> {
    return this.http.get<IGetShowtimeResponse>(this.appConfig.rootURL + "showtimes/location");
  }


}


