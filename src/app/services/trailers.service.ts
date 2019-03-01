import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../models/constants';
import { HttpClient } from 'selenium-webdriver/http';
import { APP_CONFIG } from '../app.config';

const rootURL = "https://84uistcmod.execute-api.us-east-1.amazonaws.com/dev";

@Injectable({
  providedIn: 'root'
})
export class TrailersService {
  private popularURL;
  private appConfig: AppConfig;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
    this.appConfig = config;
    this.popularURL = this.appConfig.rootURL + "trailers?tabSection=popular";
  }

  
}
