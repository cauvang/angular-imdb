import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TitlesModule } from '../titles/titles.module';
import { PhotosModule } from '../photos/photos.module';
import { NameService } from '../services/name.service';
import { NameHomeComponent } from './name-home/name-home.component';
import { NameHomepageComponent } from './name-homepage/name-homepage.component';
import { HeaderComponent } from './header/header.component';
import { NameNewsComponent } from './name-news/name-news.component';
import { NameAwardComponent } from './name-award/name-award.component';
import { NamePhotoMediaIndexComponent } from './name-photo-media-index/name-photo-media-index.component';
import { NamePhotoVideoGalleryComponent } from './name-photo-video-gallery/name-photo-video-gallery.component';
import { NameDetailBioComponent } from './name-detail-bio/name-detail-bio.component';
import { NameDetailOtherWorksComponent } from './name-detail-other-works/name-detail-other-works.component';
import { NameDetailExternalStiesComponent } from './name-detail-external-sties/name-detail-external-sties.component';

@NgModule({
    declarations: [
        NameHomeComponent,
        NameHomepageComponent,
        HeaderComponent,
        NameNewsComponent,
        NameAwardComponent,
        NamePhotoMediaIndexComponent,
        NamePhotoVideoGalleryComponent,

        NameDetailBioComponent,
        NameDetailExternalStiesComponent,
        NameDetailOtherWorksComponent,

    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        CommonModule,
        FormsModule,
        SharedModule,
        TitlesModule,
        PhotosModule
    ],
    providers: [
        NameService
    ]
})
export class NameModule { }