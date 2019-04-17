import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres/genres.component';
import { LinkListComponent } from './link-list/link-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        GenresComponent,
        LinkListComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        SharedModule
    ],
    exports: [
        GenresComponent,
        LinkListComponent
    ]
})
export class GenreModule { }