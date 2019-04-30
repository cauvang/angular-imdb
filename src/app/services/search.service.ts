import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { ISearchResult, ISearchName, ISearchTitle, ISearchKeyword } from '../models/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getSearchTitle(keysearch: string): Observable<ISearchResult<ISearchTitle>> {
    const url = this.appConfig.rootURL + 'search/title?' + keysearch;
    return this.http.get<ISearchResult<ISearchTitle>>(url);
  }

  public getSearchTitleText(keysearch: string): Observable<ISearchResult<ISearchTitle>> {
    const url = this.appConfig.rootURL + 'search/title-text?' + keysearch;
    return this.http.get<ISearchResult<ISearchTitle>>(url);
  }

  public getSearchName(keysearch: string): Observable<ISearchResult<ISearchName>> {
    const url = this.appConfig.rootURL + 'search/name?' + keysearch;
    return this.http.get<ISearchResult<ISearchName>>(url);
  }

  public getSearchNameText(keysearch: string): Observable<ISearchResult<ISearchName>> {
    const url = this.appConfig.rootURL + 'search/name-text?' + keysearch;
    return this.http.get<ISearchResult<ISearchName>>(url);
  }

  public getSearchKeywordList(): Observable<string[]> {
    const url = this.appConfig.rootURL + 'search/keywords';
    return this.http.get<string[]>(url);
  }

  public getSearchKeyword(keysearch: string): Observable<ISearchKeyword> {
    const url = this.appConfig.rootURL + 'search/keyword?' + keysearch;
    return this.http.get<ISearchKeyword>(url);
  }
}

