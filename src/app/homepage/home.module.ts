import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { NewsComponent } from './news/news.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ArticlesComponent } from './articles/articles.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { TrailerComponent } from './trailer/trailer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        HomeComponent,
        TrailerComponent,
        NewsComponent,
        ScheduleComponent,
        ArticlesComponent,
        BirthdayComponent,

    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        CoreModule,
        SharedModule
    ],
    exports: [
    ],

})
export class HomeModule { }
