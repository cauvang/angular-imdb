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
import { TitlesHomeComponent } from './titles/titles-home/titles-home.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { ChartTopRatedComponent } from './charts/chart-top-rated/chart-top-rated.component';
import { NameHomeComponent } from './name/name-home/name-home.component';
import { SearchModule } from './search/search.module';
import { GenreModule } from './genre/genre.module';
import { PhotoHomeComponent } from './photos/photo-home/photo-home.component';
import { PagingNumberComponent } from './photos/paging-number/paging-number.component';
import { FindHomeComponent } from './find/find-home/find-home.component';
import { FindListComponent } from './find/find-list/find-list.component';
import { FindAbbComponent } from './find/find-abb/find-abb.component';

@NgModule({
  declarations: [
    AppComponent,
    TrailersComponent,
    TitlesHomeComponent,
    CalendarComponent,
    ChartTopRatedComponent,
    NameHomeComponent,
    PhotoHomeComponent,
    PagingNumberComponent,
    FindHomeComponent,
    FindListComponent,
    FindAbbComponent,
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
    SearchModule,
    GenreModule
  ],
  providers: [HomePageService, NewsService, MoviesService, ShowtimesService,
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
