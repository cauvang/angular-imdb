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
import { CustomDateFormatPipe } from './custom-date-format.pipe';
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

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,

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
    QueryStringPipe,
    CurrencyFormatPipe,
    OverlayImageComponent,
    RefinementComponent,
    ValueFormatPipe,


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
    QueryStringPipe,
    CurrencyFormatPipe,
    RatingsComponent,
    OverlayImageComponent,
    RefinementComponent,
    ValueFormatPipe

  ]
})
export class SharedModule { }
