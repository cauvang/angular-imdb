import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieTheatreComponent } from './movie-theatre/movie-theatre.component';
import { MovieComingSoonComponent } from './movie-coming-soon/movie-coming-soon.component';
import { SharedModule } from '../shared/shared.module';
import { ShowtimesModule } from '../showtimes/showtimes.module';


@NgModule({
    declarations: [
        MovieHomeComponent,
        MovieTheatreComponent,
        MovieComingSoonComponent,
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        CoreModule,
        SharedModule,
        ShowtimesModule
    ],

})
export class MoviesModule { }
