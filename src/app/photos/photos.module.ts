import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PhotoHomeComponent } from './photo-home/photo-home.component';
import { PagingNumberComponent } from './paging-number/paging-number.component';
import { PhotoDisplayComponent } from './photo-display/photo-display.component';
import { PageDisplayComponent } from './page-display/page-display.component';
import { PhotoRefineComponent } from './photo-refine/photo-refine.component';
import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [
        PhotoHomeComponent,
        PagingNumberComponent,
        PageDisplayComponent,
        PhotoDisplayComponent,
        PhotoRefineComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        CoreModule,
        FormsModule,
        SharedModule,
        PaginationModule.forRoot(),

    ],
    exports: [
        PhotoDisplayComponent,
        PhotoRefineComponent
    ],

})
export class PhotosModule { }
