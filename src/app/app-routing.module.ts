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
import { TitlePhotoMediaIndexComponent } from './titles/title-photo-media-index/title-photo-media-index.component';
import { TitlePhotoVideoGalleryComponent } from './titles/title-photo-video-gallery/title-photo-video-gallery.component';
import { NameHomepageComponent } from './name/name-homepage/name-homepage.component';
import { NameNewsComponent } from './name/name-news/name-news.component';
import { NameAwardComponent } from './name/name-award/name-award.component';
import { NamePhotoMediaIndexComponent } from './name/name-photo-media-index/name-photo-media-index.component';
import { NamePhotoVideoGalleryComponent } from './name/name-photo-video-gallery/name-photo-video-gallery.component';
import { NameDetailBioComponent } from './name/name-detail-bio/name-detail-bio.component';
import { NameDetailOtherWorksComponent } from './name/name-detail-other-works/name-detail-other-works.component';
import { NameDetailExternalStiesComponent } from './name/name-detail-external-sties/name-detail-external-sties.component';
import { TitleNewsComponent } from './titles/title-news/title-news.component';
import { MediaViewerComponent } from './mediaviewer/media-viewer.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

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

  {
    path: 'showtimes', component: ShowtimeHomeComponent, children: [
      // { path: 'movies', component: ShowtimeMovieComponent },
      // { path: 'movies/:country/:zipcode/:date', component: ShowtimeMovieComponent },
      { path: 'location/:country/:zipcode/:date', component: ShowtimeMovieComponent },
      { path: 'location/:country/:zipcode', component: ShowtimeMovieComponent },

      { path: 'theater', component: ShowtimeTheaterComponent },
      // { path: 'theater/:country/:zipcode/:date', component: ShowtimeTheaterComponent },

      { path: ':country/:zipcode', component: ShowtimeTheaterComponent },
      { path: ':country/:zipcode/:date', component: ShowtimeTheaterComponent },

      { path: 'favourite', component: ShowtimeFavouriteComponent },
    ]
  },
  { path: 'showtimes/cinema/:id', component: ShowtimeCinemaComponent },
  { path: 'showtimes/cinema/:country/:id/:country/:zipcode', component: ShowtimeCinemaComponent },
  { path: 'showtimes/cinema/:country/:id/:country/:zipcode/:date', component: ShowtimeCinemaComponent },
  { path: 'showtimes/title/:id', component: ShowtimeTitleComponent },
  { path: 'showtimes/title/:id/:country/:zipcode/:date', component: ShowtimeTitleComponent },


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
      { path: 'soundtrack', component: TitleDoYouKnowTriviaComponent },

      { path: 'taglines', component: TitleDoYouKnowVersionsComponent },
      { path: 'plotsummary', component: TitleDoYouKnowConnectionsComponent },
      { path: 'keywords', component: TitleStorylineKeywordsComponent },

      { path: 'news', component: TitleNewsComponent },

      { path: 'criticreviews', component: TitleCriticReviewComponent },
      { path: 'reviews', component: TitleReviewComponent },
      { path: 'externalreviews', component: TitleExternalReviewComponent },
    ]
  },
  { path: 'title/:id/mediaindex', component: TitlePhotoMediaIndexComponent },
  { path: 'title/:id/videogallery', component: TitlePhotoVideoGalleryComponent },
  { path: 'title/:id/mediaviewer/:rid', component: MediaViewerComponent },
  { path: 'title/:id/videoplayer/:rid', component: VideoplayerComponent },

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
    path: 'name/:id', component: NameHomepageComponent, children: [
      { path: '', component: NameHomeComponent },
      { path: 'bio', component: NameDetailBioComponent },
      { path: 'bio/:section', component: NameDetailBioComponent },

      { path: 'otherworks', component: NameDetailOtherWorksComponent },
      { path: 'publicity', component: NameDetailBioComponent },
      // { path: 'officialsites', component: NameDetailExternalStiesComponent },
      { path: 'externalsites', component: NameDetailExternalStiesComponent },

      { path: 'news', component: NameNewsComponent },
      { path: 'awards', component: NameAwardComponent },

    ],
  },
  { path: 'name/:id/mediaindex', component: NamePhotoMediaIndexComponent },
  { path: 'name/:id/videogallery', component: NamePhotoVideoGalleryComponent },
  { path: 'name/:id/mediaviewer/:id', component: MediaViewerComponent },

  { path: 'list/:id', component: ListsComponent },

  { path: 'feature/genre', component: GenresComponent },

  { path: 'gallery/:id', component: PhotoHomeComponent },
  { path: 'gallery/:id/mediaviewer/:id', component: MediaViewerComponent },

  { path: 'find', component: FindHomeComponent },
  { path: 'videoplayer/:id', component: VideoplayerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],

  exports: [RouterModule],

})
export class AppRoutingModule { }
