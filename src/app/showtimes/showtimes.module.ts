import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ShowtimeMovieComponent } from './showtime-movie/showtime-movie.component';
import { ShowtimeTheaterComponent } from './showtime-theater/showtime-theater.component';
import { ShowtimeHomeComponent } from './showtime-home/showtime-home.component';
import { ShowtimeFavouriteComponent } from './showtime-favourite/showtime-favourite.component';
import { ShowtimeTheaterItemComponent } from './showtime-theater-item/showtime-theater-item.component';
import { ShowtimeTitleComponent } from './showtime-title/showtime-title.component';
import { ShowtimeTheaterInputComponent } from './showtime-theater-input/showtime-theater-input.component';
import { ShowtimeDisplayComponent } from './showtime-display/showtime-display.component';

@NgModule({
    declarations: [
        ShowtimeFavouriteComponent,
        ShowtimeHomeComponent,
        ShowtimeMovieComponent,
        ShowtimeTheaterComponent,
        ShowtimeTheaterInputComponent,
        ShowtimeTheaterItemComponent,
        ShowtimeTitleComponent,
        ShowtimeDisplayComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        CoreModule,
        SharedModule,
        // BsDropdownModule.forRoot(),
    ],
    exports: [
        AppRoutingModule,
        // ShowtimeFavouriteComponent,
        ShowtimeHomeComponent,
        ShowtimeMovieComponent,
        ShowtimeTheaterComponent,
        ShowtimeTheaterInputComponent,
        ShowtimeTheaterItemComponent,
        ShowtimeTitleComponent
    ],

})
export class ShowtimesModule { }