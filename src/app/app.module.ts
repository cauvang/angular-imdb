import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomePageService } from './services/home-page.service';
import { HomeModule } from './homepage/home.module';
import { NewsModule } from './news/news.module';
import { NewsService } from './services/news.service';
import { APP_CONFIG_VALUE, APP_CONFIG } from './app.config';
import { TrailersComponent } from './trailers/trailers.component';
import { MoviesModule } from './movies/movies.module';
import { MoviesService } from './services/movies.service';
import { ShowtimesService } from './services/showtimes.service';
import { ShowtimesModule } from './showtimes/showtimes.module';
import { GetDateService } from './services/getDate.service';
import { TitlesHomeComponent } from './titles/titles-home/titles-home.component';
import { BoxofficeComponent } from './charts/boxoffice/boxoffice.component';
import { ToptvComponent } from './charts/toptv/toptv.component';

@NgModule({
  declarations: [
    AppComponent,
    TrailersComponent,
    TitlesHomeComponent,
    BoxofficeComponent,
    ToptvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    HomeModule,
    NewsModule,
    MoviesModule,
    ShowtimesModule,
  ],
  providers: [HomePageService, NewsService, MoviesService, ShowtimesService, GetDateService,
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
