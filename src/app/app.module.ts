import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomePageService } from './services/home-page.service';
import { HttpClientModule } from '@angular/common/http';
import { TopNewsComponent } from './news/top-news/top-news.component';
import { NewsHomeComponent } from './news/news-home/news-home.component';
import { HomeModule } from './homepage/home.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
    NewsHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    HomeModule
  ],
  providers: [HomePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
