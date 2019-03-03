import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { Observable } from 'rxjs';
import { IGetTrailerResponse } from '../models/trailer';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrailersService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getTrailers(trailerType: string): Observable<IGetTrailerResponse[]> {
    return this.http.get<IGetTrailerResponse[]>(this.appConfig.rootURL + "trailers?tabSection=" + trailerType);
  }

  
}
