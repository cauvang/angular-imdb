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
import { APP_CONFIG_VALUE, APP_CONFIG } from './app.config';
import { TrailersComponent } from './trailers/trailers.component';
import { MoviesModule } from './movies/movies.module';
import { ShowtimesModule } from './showtimes/showtimes.module';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { ChartTopRatedComponent } from './charts/chart-top-rated/chart-top-rated.component';
import { SearchModule } from './search/search.module';
import { GenreModule } from './genre/genre.module';
import { FindHomeComponent } from './find/find-home/find-home.component';
import { FindAbbComponent } from './find/find-abb/find-abb.component';
import { TitlesModule } from './titles/titles.module';
import { ListsComponent } from './lists/lists.component';
import { PhotosModule } from './photos/photos.module';
import { NameModule } from './name/name.module';

@NgModule({
  declarations: [
    AppComponent,
    TrailersComponent,
    CalendarComponent,
    ChartTopRatedComponent,
    FindHomeComponent,
    FindAbbComponent,
    ListsComponent,
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
    GenreModule,
    TitlesModule,
    PhotosModule,
    NameModule
  ],
  providers: [HomePageService,
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
