import { NgModule } from '@angular/core';


import { AppRoutingModule } from '../app-routing.module';
import { NewsAbbComponent } from './news-abb/news-abb.component';
import { NewsHomeComponent } from './news-home/news-home.component';
import { NewsListComponent } from './news-list/news-list.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        NewsAbbComponent,
        NewsListComponent,
        NewsHomeComponent,
        NewsDetailComponent,
        NewsItemComponent
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
export class NewsModule { }