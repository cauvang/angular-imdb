import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomePageService } from './services/home-page.service';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from './homepage/home.module';
import { NewsModule } from './news/news.module';
import { NewsService } from './services/news.service';
import { APP_CONFIG_VALUE, APP_CONFIG } from './app.config';
// import { AppConfig } from './models/constants';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    HomeModule,
    NewsModule
  ],
  providers: [HomePageService, NewsService,
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
