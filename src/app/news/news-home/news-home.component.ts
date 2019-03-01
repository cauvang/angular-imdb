import { Component, OnInit, Inject } from '@angular/core';
import { INews } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router'
import { APP_CONFIG } from 'src/app/app.config';
import { AppConfig } from 'src/app/models/constants';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit {
  private news: INews[];
  private otherNews = {
    top: [],
    movie: [],
    tv: [],
    celebrity: []
  }
  private token: string;
  private newsType: string;
  private config: AppConfig;
  private bLoadSuccess: boolean;

  constructor(private service: NewsService, private route: ActivatedRoute, @Inject(APP_CONFIG) config: AppConfig) {
    this.newsType = config.newsType.topNews;
    this.config = config;

    this.route.url.subscribe(url => {
      console.log("url", url);
      this.loadList();
    });

  }



  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.news = [];

    this.newsType = this.route.snapshot.params['newsType'];
    this.OnLoad();

    for (const key in this.otherNews) {
      if (this.otherNews.hasOwnProperty(key)) {
        if (key === this.newsType) {
          console.log("newstype", this.newsType);
          this.otherNews[key] = [];
          continue;
        }

        this.service.getNewsAbb(key).subscribe((data) => {
          this.otherNews[key] = data.items.slice(0, 5);
          // console.log("other", this.otherNews);
        });
      }
    }
  }

  OnLoad() {
    this.service.getNewsList(this.newsType, this.token).subscribe((data) => {
      this.news = [... this.news, ...data.items];
      this.token = data.next;
    this.bLoadSuccess=true;

    });

  }
}
