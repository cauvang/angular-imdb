import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './homepage/home.module';
import { NewsModule } from './news/news.module';
import { MoviesModule } from './movies/movies.module';
import { ShowtimesModule } from './showtimes/showtimes.module';
import { SearchModule } from './search/search.module';
import { GenreModule } from './genre/genre.module';
import { TitlesModule } from './titles/titles.module';
import { PhotosModule } from './photos/photos.module';
import { NameModule } from './name/name.module';

import { HomePageService } from './services/home-page.service';
import { APP_CONFIG_VALUE, APP_CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { TrailersComponent } from './trailers/trailers.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { ChartTopRatedComponent } from './charts/chart-top-rated/chart-top-rated.component';
import { FindHomeComponent } from './find/find-home/find-home.component';
import { FindAbbComponent } from './find/find-abb/find-abb.component';
import { ListsComponent } from './lists/lists.component';
import { MediaViewerComponent } from './mediaviewer/media-viewer.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';


@NgModule({
  declarations: [
    AppComponent,
    TrailersComponent,
    CalendarComponent,
    ChartTopRatedComponent,
    FindHomeComponent,
    FindAbbComponent,
    ListsComponent,
    MediaViewerComponent,
    VideoplayerComponent,
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
    NameModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [HomePageService,
    { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
