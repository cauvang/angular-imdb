import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { IGenreResponse } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getGenres(): Observable<IGenreResponse> {
    return this.http.get<IGenreResponse>(this.appConfig.rootURL + 'feature/genre');
  }


}


