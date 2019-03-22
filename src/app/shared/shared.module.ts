import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { VideoImageComponent } from './video-image/video-image.component';
import { GetTitlePipe } from './getTitle.pipe';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';
import { OverlayImageComponent } from './overlay-image/overlay-image.component';
import { ShareWidgetComponent } from './share-widget/share-widget.component';
import { ImagePopoverComponent } from './image-popover/image-popover.component';
import { CustomDateFormatPipe } from './custom-date-format.pipe';
import { RefinementComponent } from './refinement/refinement.component';
import { FormsModule } from '@angular/forms';
import { SortComponent } from './sort/sort.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
    imports: [
        CommonModule, FormsModule,
        MatSelectModule,
        BrowserAnimationsModule
    ],
    declarations: [
        DropdownDirective,
        VideoImageComponent,
        GetTitlePipe,
        LoadingIconComponent,
        OverlayImageComponent,
        ShareWidgetComponent,
        ImagePopoverComponent,
        CustomDateFormatPipe,
        RefinementComponent,
        SortComponent,
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        VideoImageComponent,
        GetTitlePipe,
        LoadingIconComponent,
        OverlayImageComponent,
        ShareWidgetComponent,
        ImagePopoverComponent,
        CustomDateFormatPipe,
        RefinementComponent,
        SortComponent
    ]
})
export class SharedModule { }