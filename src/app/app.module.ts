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
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { ChartTopRatedComponent } from './charts/chart-top-rated/chart-top-rated.component';
import { NameHomeComponent } from './name/name-home/name-home.component';
import { SearchModule } from './search/search.module';
import { GenreModule } from './genre/genre.module';
import { FindHomeComponent } from './find/find-home/find-home.component';
import { FindAbbComponent } from './find/find-abb/find-abb.component';
import { NameBioComponent } from './name/name-bio/name-bio.component';
import { NameMediaIndexComponent } from './name/name-media-index/name-media-index.component';
import { TitlesModule } from './titles/titles.module';
import { TitlesService } from './services/titles.service';
import { ListsComponent } from './lists/lists.component';
import { PhotosModule } from './photos/photos.module';
import { GetSectionNamePipe } from './name/get-section-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TrailersComponent,
    CalendarComponent,
    ChartTopRatedComponent,
    NameHomeComponent,
    FindHomeComponent,
    FindAbbComponent,
    NameBioComponent,
    NameMediaIndexComponent,
    ListsComponent,
    GetSectionNamePipe,
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
    PhotosModule
  ],
  providers: [HomePageService, NewsService, MoviesService, ShowtimesService, TitlesService,
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
