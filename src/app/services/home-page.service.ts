import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ITrailer } from '../models/trailer';
import { ISchedule } from '../models/schedule';
import { IArticle } from '../models/article';
import { IGetNewsResponse } from '../models/news';
import { IGetBirthdayResponse } from '../models/birthday';
import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { getLocaleDateFormat, FormatWidth } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class HomePageService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }


  public getTopTrailers(): Observable<ITrailer[]> {
    return this.http.get<ITrailer[]>(this.appConfig.rootURL + "trailers/top3");
  }

  public getOpeningThisWeekSchedule(): Observable<ISchedule[]> {
    return this.http.get<ISchedule[]>(this.appConfig.rootURL + "schedules/open-this-week");
  }

  public getNowPlayingSchedule(): Observable<ISchedule[]> {
    return this.http.get<ISchedule[]>(this.appConfig.rootURL + "schedules/now-playing");
  }

  public getComingSoonSchedule(): Observable<ISchedule[]> {
    return this.http.get<ISchedule[]>(this.appConfig.rootURL + "schedules/comming-soon");
  }

  public getArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this.appConfig.rootURL + "articles/home");
  }

  public getNewsResponse(): Observable<IGetNewsResponse> {
    return this.http.get<IGetNewsResponse>(this.appConfig.rootURL + "news/top");
  }

  public getBirthdayResponse(): Observable<IGetBirthdayResponse> {
    return this.http.get<IGetBirthdayResponse>(this.appConfig.rootURL + "name/birthday/" + getLocaleDateFormat("MM/dd", FormatWidth.Medium));
  }

}
