import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { NewsHomeComponent } from './news/news-home/news-home.component';
import { TrailersComponent } from './trailers/trailers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news/:newsType', component: NewsHomeComponent },
  { path: 'trailers/:trailerType', component: TrailersComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
