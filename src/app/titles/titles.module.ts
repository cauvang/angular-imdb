import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TitleHomeComponent } from './title-home/title-home.component';
import { TitlesService } from '../services/titles.service';
import { TitleReviewComponent } from './title-review/title-review.component';
import { TitleCriticReviewComponent } from './title-critic-review/title-critic-review.component';
import { TitleExternalReviewComponent } from './title-external-review/title-external-review.component';
import { TitleHomepageComponent } from './title-homepage/title-homepage.component';
import { CastsComponent } from './casts/casts.component';
import { SeeAlsoComponent } from './see-also/see-also.component';
import { ListComponent } from './list/list.component';

import { TitleDetailsFullCreditsComponent } from './title-details-full-credits/title-details-full-credits.component';
import { TitleDetailsReleaseinfoComponent } from './title-details-release-info/title-details-release-info.component';
import { TitleDetailsCompanyCreditsComponent } from './title-details-company-credits/title-details-company-credits.component';
import { TitleDetailsExternalSitesComponent } from './title-details-external-sites/title-details-external-sites.component';
import { TitleDetailsTechnicalComponent } from './title-details-technical/title-details-technical.component';
import { TitleDetailsLocationsComponent } from './title-details-locations/title-details-locations.component';
import { JumpToComponent } from './jump-to/jump-to.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './user-list/user-list.component';
import { TitleDoYouKnowTriviaComponent } from './title-do-you-know-trivia/title-do-you-know-trivia.component';
import { TitleDoYouKnowVersionsComponent } from './title-do-you-know-versions/title-do-you-know-versions.component';
import { TitleDoYouKnowConnectionsComponent } from './title-do-you-know-connections/title-do-you-know-connections.component';
import { TitleStorylineKeywordsComponent } from './title-storyline-keywords/title-storyline-keywords.component';
import { TitlePhotoMediaIndexComponent } from './title-photo-media-index/title-photo-media-index.component';
import { TitlePhotoVideoGalleryComponent } from './title-photo-video-gallery/title-photo-video-gallery.component';
import { PhotosModule } from '../photos/photos.module';
import { RelatedNewsComponent } from './related-news/related-news.component';
import { ContributeComponent } from './contribute/contribute.component';

@NgModule({
    declarations: [
        TitleHomeComponent,
        TitleHomepageComponent,

        TitleReviewComponent,
        TitleCriticReviewComponent,
        TitleExternalReviewComponent,


        TitleDetailsFullCreditsComponent,
        TitleDetailsReleaseinfoComponent,
        TitleDetailsCompanyCreditsComponent,
        TitleDetailsExternalSitesComponent,
        TitleDetailsTechnicalComponent,
        TitleDetailsLocationsComponent,

        TitleDoYouKnowTriviaComponent,
        TitleDoYouKnowVersionsComponent,
        TitleDoYouKnowConnectionsComponent,

        TitlePhotoMediaIndexComponent,
        TitlePhotoVideoGalleryComponent,

        JumpToComponent,
        HeaderComponent,
        MenuComponent,
        UserListComponent,
        ListComponent,
        CastsComponent,
        SeeAlsoComponent,
        TitleStorylineKeywordsComponent,
        RelatedNewsComponent,
        ContributeComponent,

    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        CommonModule,
        FormsModule,
        SharedModule,
        PhotosModule
    ],
    exports: [
        RelatedNewsComponent,
        JumpToComponent,
        MenuComponent,
        ContributeComponent,
        UserListComponent,
        SeeAlsoComponent
    ],
    providers: [
        TitlesService
    ]
})
export class TitlesModule { }