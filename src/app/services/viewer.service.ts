import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../models/constants';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';
import { Observable } from 'rxjs';
import { IMediaViewer } from '../models/viewer';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {


  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
  }

  public getMediaViewer(id: string, imageId: string): Observable<IMediaViewer> {
    return this.http.get<IMediaViewer>(this.appConfig.rootURL + "title/" + id + "/mediaviewer/" + imageId);
  }

}
