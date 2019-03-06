

import { InjectionToken } from '@angular/core';
import { AppConfig } from './models/constants';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG_VALUE: AppConfig = {
    newsType: {
        topNews: "top",
        movieNews: "movie",
        tvNews: "tv",
        celebNews: "celebrity",
        indieNews: "indie"
    },
    rootURL: "https://84uistcmod.execute-api.us-east-1.amazonaws.com/dev/"

};

