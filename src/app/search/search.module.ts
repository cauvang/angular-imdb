import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchNameComponent } from './search-name/search-name.component';
import { SortNavigationComponent } from './sort-navigation/sort-navigation.component';
import { PagingComponent } from './paging/paging.component';
import { SearchTitleComponent } from './search-title/search-title.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SearchKeywordHomeComponent } from './search-keyword-home/search-keyword-home.component';
import { SearchKeywordComponent } from './search-keyword/search-keyword.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchKeywordRoutingComponent } from './search-keyword-routing/search-keyword-routing.component';
import { SearchTitleTextComponent } from './search-title-text/search-title-text.component';
import { SearchNameTextComponent } from './search-name-text/search-name-text.component';
import { SearchItemNameComponent } from './search-item-name/search-item-name.component';

@NgModule({
    declarations: [
        SearchNameComponent,
        SearchTitleComponent,
        SortNavigationComponent,
        PagingComponent,
        SearchKeywordHomeComponent,
        SearchKeywordComponent,
        SearchItemComponent,
        SearchKeywordRoutingComponent,
        SearchTitleTextComponent,
        SearchNameTextComponent,
        SearchItemNameComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        CoreModule,
        FormsModule,
        SharedModule
    ],
    exports: [

    ],

})
export class SearchModule { }