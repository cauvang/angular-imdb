import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { IName } from '../models/name';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getName(id: string): Observable<IName> {
    return this.http.get<IName>(this.appConfig.rootURL + 'names/' + id);
  }


}


