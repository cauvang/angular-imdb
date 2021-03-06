import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITitle, ITitleType } from '../models/title';
import { IList } from '../models/list';
import { IPhoto } from '../models/photo';

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

  public getTitleDetail(id: string, type: string): Observable<ITitleType> {
    return this.http.get<ITitleType>(this.appConfig.rootURL + 'title/' + id + '/' + type);
  }


  public getTitlePhoto(id: string, type: string, queryString: string): Observable<IPhoto> {
    let url = this.appConfig.rootURL + 'title/' + id + '/' + type;// + '?1=1';

    if (queryString != null) {
      url += '?' + queryString;
    }
    return this.http.get<IPhoto>(url);
  }





}

