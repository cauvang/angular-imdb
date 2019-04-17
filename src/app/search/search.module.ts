import { NgModule } from '@angular/core';
import { SearchNameComponent } from './search-name/search-name.component';
import { SortNavigationComponent } from './sort-navigation/sort-navigation.component';
import { PagingComponent } from './paging/paging.component';
import { SearchTitleComponent } from './search-title/search-title.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        SearchNameComponent,
        SearchTitleComponent,
        SortNavigationComponent,
        PagingComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        CoreModule,
        SharedModule
    ],
    exports: [
        SearchNameComponent,
        SearchTitleComponent,
        SortNavigationComponent,
        PagingComponent
    ],

})
export class SearchModule { }