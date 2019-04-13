import { Component, OnInit, Input } from '@angular/core';
import { INews, ISimilar } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  @Input() id: string;

  private news: INews;
  private similarNews: ISimilar[];

  constructor(private service: NewsService, private route: ActivatedRoute) {
    this.route.url.subscribe(url => {
      this.loadNews();
    });
  }

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {

    this.route.params.subscribe((params: Params) => { this.id = params['id']; });

    this.service.getNewsDetail(this.id).subscribe((data) => {
      this.news = data.item;
      this.similarNews = data.similarNews;
    });
  }

}
