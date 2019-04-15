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
import { SearchTitleComponent } from './search/search-title/search-title.component';
import { NameHomeComponent } from './name/name-home/name-home.component';
import { GenresComponent } from './genres/genres.component';
import { PagingComponent } from './search/paging/paging.component';
import { SearchNameComponent } from './search/search-name/search-name.component';

@NgModule({
  declarations: [
    AppComponent,
    TrailersComponent,
    TitlesHomeComponent,
    CalendarComponent,
    ChartTopRatedComponent,
    SearchTitleComponent,
    NameHomeComponent,
    GenresComponent,
    PagingComponent,
    SearchNameComponent,
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
  providers: [HomePageService, NewsService, MoviesService, ShowtimesService,
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
