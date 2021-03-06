import { Component, OnInit, Inject, DoCheck, AfterContentChecked, EventEmitter } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_CONFIG } from 'src/app/app.config';
import { AppConfig } from 'src/app/models/constants';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit {
  private otherNews = {
    top: [],
    movie: [],
    tv: [],
    celebrity: [],
    indie: []
  };
  private newsType: string;
  private config: AppConfig;

  constructor(private service: NewsService, private route: ActivatedRoute, @Inject(APP_CONFIG) config: AppConfig,
    private router: Router) {
    this.config = config;
    // this.route.url.subscribe(url => {
    //   this.newsType = router.routerState.snapshot.url.split('/')[2];
    //   this.loadList();
    // });
  }



  ngOnInit() {
    this.route.url.subscribe(url => {
      this.newsType = this.router.routerState.snapshot.url.split('/')[2];
      this.loadList();
    });
    // this.newsType = this.route.snapshot.firstChild.params['newsType'];
    // this.loadList();
  }

  onRouteChange(type: string) {
    this.newsType = type;
    this.loadList();
  }

  loadList() {
    for (const key in this.otherNews) {
      if (this.otherNews.hasOwnProperty(key)) {
        if (key === this.newsType) {
          this.otherNews[key] = [];
          continue;
        }

        this.service.getNewsAbb(key).subscribe((data) => {
          this.otherNews[key] = data.items.slice(0, 5);
        });

      }
    }
  }


}
