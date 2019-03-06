import { Component, OnInit, Input } from '@angular/core';
import { INews } from 'src/app/models/news';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() data: INews;


  constructor() { }

  ngOnInit() {
  }

}
