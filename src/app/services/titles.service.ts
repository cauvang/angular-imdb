import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITitle } from '../models/title';

@Injectable({
  providedIn: 'root'
})
export class TitlesService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getTitle(id: string): Observable<ITitle> {
    return this.http.get<ITitle>(this.appConfig.rootURL + 'title/' + id);
  }

}

