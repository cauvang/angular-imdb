import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { NameService } from '../services/name.service';
import { NameHomeComponent } from './name-home/name-home.component';
import { NameBioComponent } from './name-bio/name-bio.component';
import { NameMediaIndexComponent } from './name-media-index/name-media-index.component';
import { TitlesModule } from '../titles/titles.module';
import { NameHomepageComponent } from './name-homepage/name-homepage.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        NameHomeComponent,
        NameBioComponent,
        NameMediaIndexComponent,
        NameHomepageComponent,
        HeaderComponent,

    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        CommonModule,
        FormsModule,
        SharedModule,
        TitlesModule
    ],
    providers: [
        NameService
    ]
})
export class NameModule { }