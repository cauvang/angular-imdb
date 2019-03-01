import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGetNewsResponse } from '../models/news';

const rootURL = "https://84uistcmod.execute-api.us-east-1.amazonaws.com/dev";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsURL = rootURL + "/news/";
  // rootURL + "/news/top?token="{{next_token}}"

  constructor(private http: HttpClient) { }

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
