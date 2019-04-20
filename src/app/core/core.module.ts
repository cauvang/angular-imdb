import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecentViewsComponent } from './recent-views/recent-views.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HeaderComponent,
        RecentViewsComponent,
        FooterComponent,

    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
    ],
    exports: [
        HeaderComponent,
        RecentViewsComponent,
        FooterComponent
    ],

})
export class CoreModule { }