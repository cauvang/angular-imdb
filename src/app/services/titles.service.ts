import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITitle, ITitleDetail, IMenuList } from '../models/title';

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

  public getTitle_FullCredits(id: string): Observable<ITitleDetail> {
    return this.getTitleDetail(id, 'fullcredits');
  }

  public getTitle_Trivia(id: string): Observable<ITitleDetail> {
    return this.getTitleDetail(id, 'trivia');
  }

  public getTitle_Menu(id: string): Observable<IMenuList[]> {
    return this.http.get<IMenuList[]>(this.appConfig.rootURL + 'title/' + id + '/menu');

  }

  private getTitleDetail(id: string, detail: string) {
    return this.http.get<ITitleDetail>(this.appConfig.rootURL + 'title/' + id + '/' + detail);

  }


}

