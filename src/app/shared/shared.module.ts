import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { VideoImageComponent } from './video-image/video-image.component';
import { GetTitlePipe } from './getTitle.pipe';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';
import { OverlayImageComponent } from './overlay-image/overlay-image.component';
import { ShareWidgetComponent } from './share-widget/share-widget.component';
import { ImagePopoverComponent } from './image-popover/image-popover.component';
import { CustomDateFormatPipe } from './custom-date-format.pipe';
import { RefinementComponent } from './refinement/refinement.component';
import { FormsModule } from '@angular/forms';
import { SortComponent } from './sort/sort.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from '../app-routing.module';
import { WeekdaySelectComponent } from './weekday-select/weekday-select.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ShowtimeMovieNearComponent } from './showtime-movie-near/showtime-movie-near.component';
import { ShowtimeTheaterNearComponent } from './showtime-theater-near/showtime-theater-near.component';
import { RatingsComponent } from './ratings/ratings.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { QueryStringPipe } from './query-string.pipe';
import { CurrencyFormatPipe } from './currency-format.pipe';
import { LinkListComponent } from './link-list/link-list.component';

@NgModule({
  imports: [
    AppRoutingModule, CommonModule, FormsModule, MatSelectModule, BrowserAnimationsModule
  ],
  declarations: [
    DropdownDirective,
    VideoImageComponent,
    GetTitlePipe,
    LoadingIconComponent,
    OverlayImageComponent,
    ShareWidgetComponent,
    ImagePopoverComponent,
    CustomDateFormatPipe,
    RefinementComponent,
    SortComponent,
    WeekdaySelectComponent,
    MovieItemComponent,
    ShowtimeMovieNearComponent,
    ShowtimeTheaterNearComponent,
    RatingsComponent,
    FavouriteComponent,
    QueryStringPipe,
    CurrencyFormatPipe,
    LinkListComponent
  ],
  exports: [
    AppRoutingModule,
    CommonModule,
    DropdownDirective,
    VideoImageComponent,
    GetTitlePipe,
    LoadingIconComponent,
    OverlayImageComponent,
    ShareWidgetComponent,
    ImagePopoverComponent,
    CustomDateFormatPipe,
    RefinementComponent,
    SortComponent,
    WeekdaySelectComponent,
    MovieItemComponent,
    ShowtimeMovieNearComponent,
    ShowtimeTheaterNearComponent,
    FavouriteComponent,
    QueryStringPipe,
    CurrencyFormatPipe,
    LinkListComponent
  ]
})
export class SharedModule { }
