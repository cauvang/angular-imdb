import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TitleHomeComponent } from './title-home/title-home.component';
import { TitlePlotsummaryComponent } from './title-plotsummary/title-plotsummary.component';
import { TitlesService } from '../services/titles.service';
import { TitleCreditsComponent } from './title-credits/title-credits.component';
import { TitleReviewComponent } from './title-review/title-review.component';
import { TitleCriticReviewComponent } from './title-critic-review/title-critic-review.component';
import { TitleExternalReviewComponent } from './title-external-review/title-external-review.component';
import { TitleHomepageComponent } from './title-homepage/title-homepage.component';
import { CastsComponent } from './casts/casts.component';
import { SeeAlsoComponent } from './see-also/see-also.component';
import { ContributeComponent } from './contribute/contribute.component';
import { ListComponent } from './list/list.component';
import { TitleReleaseinfoComponent } from './title-releaseinfo/title-releaseinfo.component';
import { TitleTriviaComponent } from './title-trivia/title-trivia.component';
import { TitleGoofsComponent } from './title-goofs/title-goofs.component';
import { TitleVideosComponent } from './title-videos/title-videos.component';

@NgModule({
    declarations: [
        TitleHomeComponent,
        TitlePlotsummaryComponent,
        TitleCreditsComponent,
        TitleReviewComponent,
        TitleCriticReviewComponent,
        TitleExternalReviewComponent,
        TitleHomepageComponent,
        CastsComponent,
        SeeAlsoComponent,
        ContributeComponent,
        ListComponent,
        TitleReleaseinfoComponent,
        TitleTriviaComponent,
        TitleGoofsComponent,
        TitleVideosComponent
    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        CommonModule,
        FormsModule,
        SharedModule
    ],
    providers: [
        TitlesService
    ]
})
export class TitlesModule { }