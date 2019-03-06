import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { NewsHomeComponent } from './news/news-home/news-home.component';
import { TrailersComponent } from './trailers/trailers.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'news', component: NewsHomeComponent, children: [
      { path: ':newsType', component: NewsListComponent },
      { path: 'detail/:id', component: NewsDetailComponent }]
    ,
  },
  { path: 'trailers/:trailerType', component: TrailersComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
