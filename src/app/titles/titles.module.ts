import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TitleHomeComponent } from './title-home/title-home.component';
import { TitlePlotsummaryComponent } from './title-plotsummary/title-plotsummary.component';
import { TitlesService } from '../services/titles.service';

@NgModule({
    declarations: [
        TitleHomeComponent,
        TitlePlotsummaryComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        CoreModule,
        FormsModule,
        SharedModule
    ],
    providers: [
        TitlesService
    ]
})
export class TitlesModule { }