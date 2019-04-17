import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { IPhoto } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getPhotos(id: string, currentPage: number): Observable<IPhoto> {
    let url = this.appConfig.rootURL + 'gallery/' + id;
    if (currentPage)
      url += '?page=' + currentPage;

    return this.http.get<IPhoto>(url);
  }

}

