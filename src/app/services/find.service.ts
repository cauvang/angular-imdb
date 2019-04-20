import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { IFinder } from '../models/find';

@Injectable({
  providedIn: 'root'
})
export class FindService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getFindResult(query: any): Observable<IFinder> {
    let url = this.appConfig.rootURL + 'find?';
    if (query.q)
      url += 'q=' + query.q;
    if (query.s)
      url += '&s=' + query.s;
    return this.http.get<IFinder>(url);
  }
}

