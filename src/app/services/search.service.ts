import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { ISearchResult, ISearchName, ISearchTitle } from '../models/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getSearchTitle(keysearch: string): Observable<ISearchResult<ISearchTitle>> {
    let url = this.appConfig.rootURL + 'search/title?' + keysearch;

    return this.http.get<ISearchResult<ISearchTitle>>(url);
  }

  public getSearchName(keysearch: string): Observable<ISearchResult<ISearchName>> {
    let url = this.appConfig.rootURL + 'search/name?' + keysearch;

    return this.http.get<ISearchResult<ISearchName>>(url);
  }
}

