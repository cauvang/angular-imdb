import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGetNewsResponse } from '../models/news';
import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsURL;
  // rootURL + "/news/top?token="{{next_token}}"

    private appConfig: AppConfig;

    constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
      this.appConfig = config;
    this.newsURL = this.appConfig.rootURL + "news/";
  }

  public getNewsList(newsType: string, token: string): Observable<IGetNewsResponse> {
    var url = this.newsURL + newsType;
    // console.log(url);
    if (token != null)
      url += "?token=" + token + "";
    return this.http.get<IGetNewsResponse>(url);
  }

  public getNewsAbb(newsType: string): Observable<IGetNewsResponse> {
    return this.http.get<IGetNewsResponse>(this.newsURL + newsType);
  }


}
