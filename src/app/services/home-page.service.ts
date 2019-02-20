import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ITrailer } from '../models/trailer';
import { ISchedule } from '../models/schedule';
import { IArticle } from '../models/article';
import { IGetNewsResponse } from '../models/news';
import { IGetBirthdayResponse } from '../models/birthday';

const rootURL = "https://84uistcmod.execute-api.us-east-1.amazonaws.com/dev";

@Injectable({
  providedIn: 'root'
})

export class HomePageService {
  private openingThisWeekURL = rootURL + "/schedules/open-this-week";
  private nowPlayingURL = rootURL + "/schedules/now-playing";
  private comingSoonURL = rootURL + "/schedules/comming-soon";

  private articlesURL = rootURL + "/articles/home";
  private topNewsURL = rootURL + "/news/top";

  private birthdayURL = rootURL + "/name/birthday/02-11";

  constructor(private http: HttpClient) { }

  public getTopTrailers(): ITrailer[] {
    return [
      { title: "test", image: "xxx" }
    ]
  }


  public getOpeningThisWeekSchedule(): Observable<ISchedule[]> {
    return this.http.get<ISchedule[]>(this.openingThisWeekURL);
  }

  public getNowPlayingSchedule(): Observable<ISchedule[]> {
    return this.http.get<ISchedule[]>(this.nowPlayingURL);
  }

  public getComingSoonSchedule(): Observable<ISchedule[]> {
    return this.http.get<ISchedule[]>(this.comingSoonURL);
  }

  public getArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this.articlesURL);
  }

  public getNewsResponse(): Observable<IGetNewsResponse> {
    return this.http.get<IGetNewsResponse>(this.topNewsURL);
  }

  public getBirthdayResponse(): Observable<IGetBirthdayResponse> {
    return this.http.get<IGetBirthdayResponse>(this.birthdayURL);
  }

}
