import { Component, OnInit } from '@angular/core';
import { INews } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit {
  public news: INews[];

  constructor(private service: NewsService) {
    this.news = [];

  }

  ngOnInit() {

    this.service.getNewsResponse().subscribe((data) => {

      this.news = data.items.slice(0, 10);
      // console.log(this.news);
    });
  }

}
