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
import { SearchNameTextComponent } from './search/search-name-text/search-name-text.component';
import { NameBioComponent } from './name/name-bio/name-bio.component';
import { NameMediaIndexComponent } from './name/name-media-index/name-media-index.component';
import { TitleReviewComponent } from './titles/title-review/title-review.component';
import { TitleExternalReviewComponent } from './titles/title-external-review/title-external-review.component';
import { TitleCriticReviewComponent } from './titles/title-critic-review/title-critic-review.component';
import { TitleHomepageComponent } from './titles/title-homepage/title-homepage.component';
import { ListsComponent } from './lists/lists.component';
import { TitleDetailsFullCreditsComponent } from './titles/title-details-full-credits/title-details-full-credits.component';
import { TitleDetailsReleaseinfoComponent } from './titles/title-details-release-info/title-details-release-info.component';
import { TitleDetailsCompanyCreditsComponent } from './titles/title-details-company-credits/title-details-company-credits.component';
import { TitleDetailsExternalSitesComponent } from './titles/title-details-external-sites/title-details-external-sites.component';
import { TitleDetailsTechnicalComponent } from './titles/title-details-technical/title-details-technical.component';
import { TitleDetailsLocationsComponent } from './titles/title-details-locations/title-details-locations.component';
import { TitleDoYouKnowTriviaComponent } from './titles/title-do-you-know-trivia/title-do-you-know-trivia.component';
import { TitleDoYouKnowVersionsComponent } from './titles/title-do-you-know-versions/title-do-you-know-versions.component';
import { TitleDoYouKnowConnectionsComponent } from './titles/title-do-you-know-connections/title-do-you-know-connections.component';
import { TitleStorylineKeywordsComponent } from './titles/title-storyline-keywords/title-storyline-keywords.component';
import { TitlePhotoVideoVideosComponent } from './titles/title-photo-video-videos/title-photo-video-videos.component';
import { TitlePhotoVideoPhotosComponent } from './titles/title-photo-video-photos/title-photo-video-photos.component';

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
      { path: 'fullcredits', component: TitleDetailsFullCreditsComponent },
      { path: 'releaseinfo', component: TitleDetailsReleaseinfoComponent },
      { path: 'officialsites', component: TitleDetailsExternalSitesComponent },
      { path: 'companycredits', component: TitleDetailsCompanyCreditsComponent },
      { path: 'technical', component: TitleDetailsTechnicalComponent },
      { path: 'locations', component: TitleDetailsLocationsComponent },

      { path: 'trivia', component: TitleDoYouKnowTriviaComponent },
      { path: 'goofs', component: TitleDoYouKnowTriviaComponent },
      { path: 'crazycredits', component: TitleDoYouKnowTriviaComponent },
      { path: 'quotes', component: TitleDoYouKnowTriviaComponent },
      { path: 'alternateversions', component: TitleDoYouKnowVersionsComponent },
      { path: 'movieconnections', component: TitleDoYouKnowConnectionsComponent },

      { path: 'taglines', component: TitleDoYouKnowVersionsComponent },
      { path: 'plotsummary', component: TitleDoYouKnowConnectionsComponent },
      { path: 'keywords', component: TitleStorylineKeywordsComponent },


      { path: 'criticreviews', component: TitleCriticReviewComponent },
      { path: 'reviews', component: TitleReviewComponent },
      { path: 'externalreviews', component: TitleExternalReviewComponent },
    ]
  },
  { path: 'title/:id/mediaindex', component: TitlePhotoVideoPhotosComponent },
  { path: 'title/:id/videogallery', component: TitlePhotoVideoVideosComponent },

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

  { path: 'list/:id', component: ListsComponent },

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
