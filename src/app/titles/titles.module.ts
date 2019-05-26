import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TitleHomeComponent } from './title-home/title-home.component';
import { TitlePlotsummaryComponent } from './title-plotsummary/title-plotsummary.component';
import { TitlesService } from '../services/titles.service';
import { TitleReviewComponent } from './title-review/title-review.component';
import { TitleCriticReviewComponent } from './title-critic-review/title-critic-review.component';
import { TitleExternalReviewComponent } from './title-external-review/title-external-review.component';
import { TitleHomepageComponent } from './title-homepage/title-homepage.component';
import { CastsComponent } from './casts/casts.component';
import { SeeAlsoComponent } from './see-also/see-also.component';
import { ContributeComponent } from './contribute/contribute.component';
import { ListComponent } from './list/list.component';
import { TitleVideosComponent } from './title-videos/title-videos.component';

import { TitleDetailsFullCreditsComponent } from './title-details-full-credits/title-details-full-credits.component';
import { TitleDetailsReleaseinfoComponent } from './title-details-release-info/title-details-release-info.component';
import { TitleDetailsCompanyCreditsComponent } from './title-details-company-credits/title-details-company-credits.component';
import { TitleDetailsExternalSitesComponent } from './title-details-external-sites/title-details-external-sites.component';
import { JumpToComponent } from './jump-to/jump-to.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ShareComponent } from './share/share.component';
import { UserListComponent } from './user-list/user-list.component';
import { TitleDetailsTechnicalComponent } from './title-details-technical/title-details-technical.component';
import { TitleDetailsLocationsComponent } from './title-details-locations/title-details-locations.component';
import { TitleKnowGoofsComponent } from './title-know-goofs/title-know-goofs.component';
import { TitleKnowTriviaComponent } from './title-know-trivia/title-know-trivia.component';

@NgModule({
    declarations: [
        TitleHomeComponent,
        TitleHomepageComponent,

        TitlePlotsummaryComponent,
        TitleReviewComponent,
        TitleCriticReviewComponent,
        TitleExternalReviewComponent,

        TitleVideosComponent,

        TitleDetailsFullCreditsComponent,
        TitleDetailsReleaseinfoComponent,
        TitleDetailsCompanyCreditsComponent,
        TitleDetailsExternalSitesComponent,
        TitleDetailsTechnicalComponent,
        TitleDetailsLocationsComponent,

        TitleKnowGoofsComponent,
        TitleKnowTriviaComponent,

        JumpToComponent,
        HeaderComponent,
        MenuComponent,
        ShareComponent,
        UserListComponent,
        ListComponent,
        CastsComponent,
        SeeAlsoComponent,
        ContributeComponent,
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