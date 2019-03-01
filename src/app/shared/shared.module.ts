import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { VideoImageComponent } from './video-image/video-image.component';

@NgModule({
    declarations: [
        DropdownDirective,
        VideoImageComponent
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        VideoImageComponent
    ]
})
export class SharedModule { }