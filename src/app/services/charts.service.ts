import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { ITopRated } from '../models/chart';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getCharts(id: string): Observable<ITopRated> {
    var url = this.appConfig.rootURL + "chart/" + id;//top?sort=rk,desc";
    return this.http.get<ITopRated>(url);
  }

}



