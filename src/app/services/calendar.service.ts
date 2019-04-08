import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../models/constants';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';
import { Observable } from 'rxjs';
import { ICalendar } from '../models/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }


  public getCalendar(region: string = "US"): Observable<ICalendar> {
    return this.http.get<ICalendar>(this.appConfig.rootURL + "calendar/?region=" + region);
  }
}
