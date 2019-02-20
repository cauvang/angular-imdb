import { Component, OnInit } from '@angular/core';
import { ITrailer } from 'src/app/models/trailer';
import { HomePageService } from 'src/app/services/home-page.service';
import { ISchedule } from 'src/app/models/schedule';
import { IArticle } from 'src/app/models/article';
import { INews } from 'src/app/models/news';
import { IBirthday } from 'src/app/models/birthday';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public trailers: ITrailer[]
  public schedulesThisWeek: ISchedule[];
  public schedulesNowPlaying: ISchedule[];
  public schedulesComingSoon: ISchedule[];
  public articles: IArticle[];
  public news: INews[];
  public topNews: INews;
  public birthday: IBirthday[];

  constructor(private service: HomePageService) {
    this.trailers = [];
    this.schedulesThisWeek = [];
    this.schedulesNowPlaying = [];
    this.schedulesComingSoon = [];
    this.articles = [];
    this.news = [];
    this.birthday = [];
  }

  ngOnInit() {
    this.trailers = this.service.getTopTrailers();

    this.service.getOpeningThisWeekSchedule().subscribe((data) => { this.schedulesThisWeek = data; });

    this.service.getNowPlayingSchedule().subscribe((data) => { this.schedulesNowPlaying = data; });

    this.service.getComingSoonSchedule().subscribe((data) => { this.schedulesComingSoon = data; });

    this.service.getArticles().subscribe((data) => {
      this.articles = data;
    });

    this.service.getNewsResponse().subscribe((data) => {

      this.news = data.items.slice(1, 5);
      this.topNews = data.items[0];
      // console.log(this.topNews);
    });

    this.service.getBirthdayResponse().subscribe((data) => {
      this.birthday = data.items.slice(0, 5);
      console.log(this.birthday);
    });
  }

}
