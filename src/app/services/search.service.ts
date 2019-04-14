import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { ISearch } from '../models/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }



  public getSearchResult(keysearch: string): Observable<ISearch> {
    let url = this.appConfig.rootURL + 'search/title?' + keysearch;

    return this.http.get<ISearch>(url);
  }

}

