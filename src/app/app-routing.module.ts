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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trailers/:trailerType', component: TrailersComponent },
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
  { path: 'showtimes/title/:id/:date', component: ShowtimeTitleComponent },
  {
    path: 'showtimes', component: ShowtimeHomeComponent, children: [
      { path: 'movies', component: ShowtimeMovieComponent },
      { path: 'movies/:country/:zipcode/:date', component: ShowtimeMovieComponent },

      { path: 'theater', component: ShowtimeTheaterComponent },
      { path: 'theater/:country/:zipcode/:date', component: ShowtimeTheaterComponent },

      { path: 'favourite', component: ShowtimeFavouriteComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
