import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGetNewsResponse } from '../models/news';

const rootURL = "https://84uistcmod.execute-api.us-east-1.amazonaws.com/dev";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private topNewsURL = rootURL + "/news/top";
private topNewsTokenURL=rootURL+"/news/top?token=";//{{next_token}}"

  constructor(private http:HttpClient) { }

  public getNewsResponse(): Observable<IGetNewsResponse> {
    return this.http.get<IGetNewsResponse>(this.topNewsURL);
  } 
}
