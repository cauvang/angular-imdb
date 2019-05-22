import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITitle, ITitleDetail, ITitleMenu } from '../models/title';
import { IList } from '../models/list';

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

  public getTitle_Menu(id: string): Observable<ITitleMenu> {
    return this.http.get<ITitleMenu>(this.appConfig.rootURL + 'title/' + id + '/menu');

  }

  public getList(id: string, page: number): Observable<IList> {
    return this.http.get<IList>(this.appConfig.rootURL + 'title/' + id + '/lists?page=' + page);
  }

  public getTitleDetail(id: string, detail: string): Observable<ITitleDetail> {
    return this.http.get<ITitleDetail>(this.appConfig.rootURL + 'title/' + id + '/' + detail);

  }


}

