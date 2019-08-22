import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../models/constants';
import { APP_CONFIG } from '../app.config';
import { IMediaViewer, IVideoViewer, IRelation, IVideos } from '../models/viewer';

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

  public getVideoViewer(id: string): Observable<IVideoViewer> {
    return this.http.get<IVideoViewer>(this.appConfig.rootURL + "videoplayer/video/" + id);
  }

  public getVideoPlaylist(titleId: string): Observable<IVideos> {
    return this.http.get<IVideos>(this.appConfig.rootURL + "videoplayer/playlist/" + titleId);
  }
}
