import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ShowtimeMovieComponent } from './showtime-movie/showtime-movie.component';
import { ShowtimeTheaterComponent } from './showtime-theater/showtime-theater.component';
import { ShowtimeHomeComponent } from './showtime-home/showtime-home.component';
import { ShowtimeFavouriteComponent } from './showtime-favourite/showtime-favourite.component';
import { ShowtimeTheaterItemComponent } from './showtime-theater-item/showtime-theater-item.component';
import { ShowtimeTitleComponent } from './showtime-title/showtime-title.component';
import { ShowtimeDisplayComponent } from './showtime-display/showtime-display.component';
import { ShowtimeTheaterListComponent } from './showtime-theater-list/showtime-theater-list.component';
import { ShowtimeCinemaComponent } from './showtime-cinema/showtime-cinema.component';
import { SetLocationComponent } from './set-location/set-location.component';
import { WeekdaySelectComponent } from './weekday-select/weekday-select.component';
import { MatSelectModule } from '@angular/material/select';
import { FavouriteComponent } from './favourite/favourite.component';
import { CustomDateFormatPipe } from './custom-date-format.pipe';

@NgModule({
    declarations: [
        ShowtimeFavouriteComponent,
        ShowtimeHomeComponent,
        ShowtimeMovieComponent,
        ShowtimeTheaterComponent,
        ShowtimeTheaterListComponent,
        ShowtimeTheaterItemComponent,
        ShowtimeTitleComponent,
        ShowtimeDisplayComponent,
        ShowtimeCinemaComponent,
        SetLocationComponent,
        WeekdaySelectComponent,
        FavouriteComponent,
        CustomDateFormatPipe,

    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        CommonModule,
        CoreModule,
        SharedModule,
        MatSelectModule,
    ],


})
export class ShowtimesModule { }
