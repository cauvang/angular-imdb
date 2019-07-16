import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { DropdownDirective } from './dropdown.directive';
import { VideoImageComponent } from './video-image/video-image.component';
import { GetTitlePipe } from './getTitle.pipe';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';
import { ShareWidgetComponent } from './share-widget/share-widget.component';
import { AppRoutingModule } from '../app-routing.module';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ShowtimeMovieNearComponent } from './showtime-movie-near/showtime-movie-near.component';
import { ShowtimeTheaterNearComponent } from './showtime-theater-near/showtime-theater-near.component';
import { RatingsComponent } from './ratings/ratings.component';
import { QueryStringPipe } from './query-string.pipe';
import { CurrencyFormatPipe } from './currency-format.pipe';
import { SortDropdownComponent } from './sort-dropdown/sort-dropdown.component';
import { OverlayImageComponent } from './overlay-image/overlay-image.component';
import { RefinementComponent } from './refinement/refinement.component';
import { ValueFormatPipe } from './value-format.pipe';
import { StringDisplayComponent } from './string-display/string-display.component';
import { RatingModule } from 'ngx-rating';
import { QueryUrlPipe } from './query-url.pipe';
import { RouteDirective } from './route.directive';
import { ImagePopoverComponent } from './image-popover/image-popover.component';
import { SharePageComponent } from './share-page/share-page.component';
import { GetSectionNamePipe } from './get-section-name.pipe';
import { GetJumpToNamePipe } from './get-jump-to-name.pipe';
import { QueryFragmentPipe } from './query-fragment.pipe';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    RatingModule,
  ],
  declarations: [
    DropdownDirective,
    VideoImageComponent,
    GetTitlePipe,
    LoadingIconComponent,
    ShareWidgetComponent,
    SortDropdownComponent,
    MovieItemComponent,
    ShowtimeMovieNearComponent,
    ShowtimeTheaterNearComponent,
    RatingsComponent,
    QueryStringPipe,
    CurrencyFormatPipe,
    OverlayImageComponent,
    RefinementComponent,
    ValueFormatPipe,
    StringDisplayComponent,
    QueryUrlPipe,
    RouteDirective,
    ImagePopoverComponent,
    SharePageComponent,
    GetSectionNamePipe,
    GetJumpToNamePipe,
    QueryFragmentPipe,

  ],
  exports: [
    DropdownDirective,
    VideoImageComponent,
    GetTitlePipe,
    LoadingIconComponent,
    ShareWidgetComponent,
    SortDropdownComponent,
    MovieItemComponent,
    ShowtimeMovieNearComponent,
    ShowtimeTheaterNearComponent,
    QueryStringPipe,
    CurrencyFormatPipe,
    RatingsComponent,
    OverlayImageComponent,
    RefinementComponent,
    ValueFormatPipe,
    StringDisplayComponent,
    QueryUrlPipe,
    RouteDirective,
    ImagePopoverComponent,
    SharePageComponent,
    GetSectionNamePipe,
    GetJumpToNamePipe,
    QueryFragmentPipe
  ]
})
export class SharedModule { }
