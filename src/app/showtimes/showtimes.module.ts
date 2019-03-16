import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ShowtimeMovieComponent } from './showtime-movie/showtime-movie.component';
import { ShowtimeTheaterComponent } from './showtime-theater/showtime-theater.component';
import { ShowtimeHomeComponent } from './showtime-home/showtime-home.component';
import { ShowtimeMovieNearComponent } from './showtime-movie-near/showtime-movie-near.component';
import { ShowtimeTheaterNearComponent } from './showtime-theater-near/showtime-theater-near.component';
import { ShowtimeFavouriteComponent } from './showtime-favourite/showtime-favourite.component';
import { ShowtimeTheaterItemComponent } from './showtime-theater-item/showtime-theater-item.component';
import { WeekdaySelectComponent } from './weekday-select/weekday-select.component';


@NgModule({
    declarations: [
        ShowtimeMovieComponent,
        ShowtimeTheaterComponent,
        ShowtimeHomeComponent,
        ShowtimeMovieNearComponent,
        ShowtimeTheaterNearComponent,
        ShowtimeFavouriteComponent,
        ShowtimeTheaterItemComponent,
        WeekdaySelectComponent,

    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        CoreModule,
        SharedModule,
        BsDropdownModule.forRoot()
    ],
    exports: [
        AppRoutingModule,
        ShowtimeMovieComponent,
        ShowtimeTheaterComponent,
        ShowtimeHomeComponent,
        ShowtimeMovieNearComponent,
        ShowtimeTheaterNearComponent,
        ShowtimeFavouriteComponent,
        WeekdaySelectComponent,

    ],

})
export class ShowtimesModule { }