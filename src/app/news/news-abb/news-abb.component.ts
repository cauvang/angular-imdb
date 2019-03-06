import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INews } from 'src/app/models/news';

@Component({
  selector: 'app-news-abb',
  templateUrl: './news-abb.component.html',
  styleUrls: ['./news-abb.component.scss']
})
export class NewsAbbComponent implements OnInit {

  @Input() data: INews[];
  @Input() newsType: string;
  @Output() routeChange = new EventEmitter();
  constructor() {

  }

  ngOnInit() {
  }
  onRouteClick() {
    this.routeChange.emit(this.newsType);
  }
}
