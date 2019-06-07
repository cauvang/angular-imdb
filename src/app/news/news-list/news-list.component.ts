import { Component, OnInit, Inject } from '@angular/core';
import { INews } from 'src/app/models/news';
import { ActivatedRoute, Params } from '@angular/router';
import { AppConfig } from 'src/app/models/constants';
import { NewsService } from 'src/app/services/news.service';
import { APP_CONFIG } from 'src/app/app.config';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {


  private news: INews[];

  private token: string;
  private newsType: string;
  private config: AppConfig;
  private bLoadSuccess: boolean;

  constructor(private service: NewsService, private route: ActivatedRoute, @Inject(APP_CONFIG) config: AppConfig) {
    this.config = config;

    // this.route.url.subscribe(url => {      this.loadList();    });

  }


  ngOnInit() {
    this.route.url.subscribe(url => { this.loadList(); });

    // this.loadList();
  }

  loadList() {
    this.news = [];

    this.route.params.subscribe((params: Params) => {
      this.newsType = params['newsType'];
    });


    this.service.getNewsList(this.newsType, '').subscribe((data) => {
      this.news = data.items;
      this.token = data.next;
      this.bLoadSuccess = true;
    });

  }

  OnLoad() {
    this.service.getNewsList(this.newsType, this.token).subscribe((data) => {
      this.news = [... this.news, ...data.items];
      this.token = data.next;
      this.bLoadSuccess = true;

    });

  }

}
