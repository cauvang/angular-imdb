import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './homepage/home/home.component';
import { NewsHomeComponent } from './news/news-home/news-home.component';
import { TrailersComponent } from './trailers/trailers.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { MovieHomeComponent } from './movies/movie-home/movie-home.component';
import { MovieTheatreComponent } from './movies/movie-theatre/movie-theatre.component';
import { MovieComingSoonComponent } from './movies/movie-coming-soon/movie-coming-soon.component';
import { ShowtimeHomeComponent } from './showtimes/showtime-home/showtime-home.component';
import { ShowtimeMovieComponent } from './showtimes/showtime-movie/showtime-movie.component';
import { ShowtimeTheaterComponent } from './showtimes/showtime-theater/showtime-theater.component';
import { ShowtimeFavouriteComponent } from './showtimes/showtime-favourite/showtime-favourite.component';
import { ShowtimeTitleComponent } from './showtimes/showtime-title/showtime-title.component';
import { ShowtimeCinemaComponent } from './showtimes/showtime-cinema/showtime-cinema.component';
import { TitleHomeComponent } from './titles/title-home/title-home.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { ChartTopRatedComponent } from './charts/chart-top-rated/chart-top-rated.component';
import { SearchTitleComponent } from './search/search-title/search-title.component';
import { NameHomeComponent } from './name/name-home/name-home.component';
import { SearchNameComponent } from './search/search-name/search-name.component';
import { GenresComponent } from './genre/genres/genres.component';
import { PhotoHomeComponent } from './photos/photo-home/photo-home.component';
import { FindHomeComponent } from './find/find-home/find-home.component';
import { SearchKeywordRoutingComponent } from './search/search-keyword-routing/search-keyword-routing.component';
import { SearchTitleTextComponent } from './search/search-title-text/search-title-text.component';
import { TitlePlotsummaryComponent } from './titles/title-plotsummary/title-plotsummary.component';
import { SearchNameTextComponent } from './search/search-name-text/search-name-text.component';
import { NameBioComponent } from './name/name-bio/name-bio.component';
import { NameMediaIndexComponent } from './name/name-media-index/name-media-index.component';
import { TitleCreditsComponent } from './titles/title-credits/title-credits.component';
import { TitleReviewComponent } from './titles/title-review/title-review.component';
import { TitleExternalReviewComponent } from './titles/title-external-review/title-external-review.component';
import { TitleCriticReviewComponent } from './titles/title-critic-review/title-critic-review.component';
import { TitleHomepageComponent } from './titles/title-homepage/title-homepage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trailers/:trailerType', component: TrailersComponent },
  { path: 'trailers', component: TrailersComponent },

  {
    path: 'news', component: NewsHomeComponent, children: [
      { path: ':newsType', component: NewsListComponent },
      { path: 'detail/:id', component: NewsDetailComponent }
    ]
  },
  {
    path: 'movies', component: MovieHomeComponent, children: [
      { path: 'in-theater', component: MovieTheatreComponent },
      { path: 'coming-soon', component: MovieComingSoonComponent },

    ]
  },
  { path: 'showtimes/title/:id', component: ShowtimeTitleComponent },
  { path: 'showtimes/title/:id/:country/:zipcode/:date', component: ShowtimeTitleComponent },
  {
    path: 'showtimes', component: ShowtimeHomeComponent, children: [
      { path: 'movies', component: ShowtimeMovieComponent },
      { path: 'movies/:country/:zipcode/:date', component: ShowtimeMovieComponent },

      { path: 'theater', component: ShowtimeTheaterComponent },
      { path: 'theater/:country/:zipcode/:date', component: ShowtimeTheaterComponent },

      { path: 'favourite', component: ShowtimeFavouriteComponent },
    ]
  },
  { path: 'showtimes/cinema/:id', component: ShowtimeCinemaComponent },
  { path: 'showtimes/cinema/:id/:country/:zipcode', component: ShowtimeCinemaComponent },
  { path: 'showtimes/cinema/:id/:country/:zipcode/:date', component: ShowtimeCinemaComponent },

  {
    path: 'title/:id', component: TitleHomepageComponent, children: [
      { path: '', component: TitleHomeComponent },
      { path: 'fullcredits', component: TitleCreditsComponent },
      { path: 'criticreviews', component: TitleCriticReviewComponent },
      { path: 'reviews', component: TitleReviewComponent },
      { path: 'externalreviews', component: TitleExternalReviewComponent },
      { path: 'plotsummary', component: TitlePlotsummaryComponent },
    ]
  },

  { path: 'chart/:chartType', component: ChartTopRatedComponent },
  { path: 'india/top', component: ChartTopRatedComponent },

  { path: 'calendar', component: CalendarComponent },
  { path: 'calendar/:region', component: CalendarComponent },

  { path: 'search/title', component: SearchTitleComponent },
  { path: 'search/title-text', component: SearchTitleTextComponent },
  { path: 'search/name', component: SearchNameComponent },
  { path: 'search/name-text', component: SearchNameTextComponent },
  { path: 'search/keyword', component: SearchKeywordRoutingComponent },


  {
    path: 'name/:id', component: NameHomeComponent, children: [
      { path: 'bio', component: NameBioComponent },
      { path: 'mediaindex', component: NameMediaIndexComponent },
    ]
  },


  { path: 'feature/genre', component: GenresComponent },

  { path: 'gallery/:id', component: PhotoHomeComponent },
  // {path:'gallery/:id/mediaviewer/:id',component:}

  { path: 'find', component: FindHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
