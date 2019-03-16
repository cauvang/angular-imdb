import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { VideoImageComponent } from './video-image/video-image.component';
import { GetTitlePipe } from './getTitle.pipe';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';
import { OverlayImageComponent } from './overlay-image/overlay-image.component';
import { ShareWidgetComponent } from './share-widget/share-widget.component';
import { ImagePopoverComponent } from './image-popover/image-popover.component';
import { WeekdaySelectComponent } from './weekday-select/weekday-select.component';
import { CustomDateFormatPipe } from './custom-date-format.pipe';
import { RefinementComponent } from './refinement/refinement.component';

@NgModule({
    imports: [
        CommonModule
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
        CustomDateFormatPipe
    ]
})
export class SharedModule { }