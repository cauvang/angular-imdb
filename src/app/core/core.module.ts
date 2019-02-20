import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ViewsComponent } from './views/views.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
    declarations: [
        HeaderComponent,
        ViewsComponent,
        FooterComponent,

    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        ViewsComponent,
        FooterComponent
    ],

})
export class CoreModule { }