import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { TitlesComponent } from './titles/titles.component';
import { NewsComponent } from './news/news.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ArticlesComponent } from './articles/articles.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        HomeComponent,
        TitlesComponent,
        NewsComponent,
        ScheduleComponent,
        ArticlesComponent,
        BirthdayComponent,

    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        CoreModule
    ],
    exports: [
        AppRoutingModule,
        HomeComponent,
        TitlesComponent,
        NewsComponent,
        ScheduleComponent,
        ArticlesComponent,
        BirthdayComponent,
    ],

})
export class HomeModule { }