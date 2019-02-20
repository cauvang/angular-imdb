import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { TopNewsComponent } from './news/top-news/top-news.component';
import { NewsHomeComponent } from './news/news-home/news-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'news', component: NewsHomeComponent, children: [
      // {path:'movie',component:}
      { path: 'top', component: TopNewsComponent }
    ]
  }
  // {
  //   // path: 'titleList', component: TitlesListComponent, children: [
  //   // {path:':id',component:TitleComponent}
  //   // ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
