import { NgModule } from '@angular/core';


import { AppRoutingModule } from '../app-routing.module';
import { NewsAbbComponent } from './news-abb/news-abb.component';
import { NewsHomeComponent } from './news-home/news-home.component';
import { NewsListComponent } from './news-list/news-list.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { GetTitlePipe } from '../shared/getTitle.pipe';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsItemComponent } from './news-item/news-item.component';


@NgModule({
    declarations: [
        NewsAbbComponent,
        NewsListComponent,
        NewsHomeComponent,
        GetTitlePipe,
        NewsDetailComponent,
        NewsItemComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        CoreModule
    ],
    exports: [
        AppRoutingModule,
        NewsAbbComponent,
        NewsListComponent,
        NewsHomeComponent,
    ],

})
export class NewsModule { }