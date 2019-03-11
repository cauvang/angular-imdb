import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { IGetMovieResponse } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getMovies(movieType: string): Observable<IGetMovieResponse[]> {
    return this.http.get<IGetMovieResponse[]>(this.appConfig.rootURL + "movie/" + movieType);
  }


}


