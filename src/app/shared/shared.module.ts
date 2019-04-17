import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { VideoImageComponent } from './video-image/video-image.component';
import { GetTitlePipe } from './getTitle.pipe';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';
import { ShareWidgetComponent } from './share-widget/share-widget.component';
import { CustomDateFormatPipe } from './custom-date-format.pipe';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from '../app-routing.module';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ShowtimeMovieNearComponent } from './showtime-movie-near/showtime-movie-near.component';
import { ShowtimeTheaterNearComponent } from './showtime-theater-near/showtime-theater-near.component';
import { RatingsComponent } from './ratings/ratings.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { QueryStringPipe } from './query-string.pipe';
import { CurrencyFormatPipe } from './currency-format.pipe';
import { SortDropdownComponent } from './sort-dropdown/sort-dropdown.component';
import { OverlayImageComponent } from './overlay-image/overlay-image.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    //  BrowserAnimationsModule
  ],
  declarations: [
    DropdownDirective,
    VideoImageComponent,
    GetTitlePipe,
    LoadingIconComponent,
    ShareWidgetComponent,
    CustomDateFormatPipe,
    SortDropdownComponent,
    MovieItemComponent,
    ShowtimeMovieNearComponent,
    ShowtimeTheaterNearComponent,
    RatingsComponent,
    FavouriteComponent,
    QueryStringPipe,
    CurrencyFormatPipe,
    OverlayImageComponent

  ],
  exports: [
    DropdownDirective,
    VideoImageComponent,
    GetTitlePipe,
    LoadingIconComponent,
    ShareWidgetComponent,
    CustomDateFormatPipe,
    SortDropdownComponent,
    MovieItemComponent,
    ShowtimeMovieNearComponent,
    ShowtimeTheaterNearComponent,
    FavouriteComponent,
    QueryStringPipe,
    CurrencyFormatPipe,
    RatingsComponent,
    OverlayImageComponent

  ]
})
export class SharedModule { }
