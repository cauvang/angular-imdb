import { Component, OnInit, Input } from '@angular/core';
import { IImage } from 'src/app/models/article';
import { ISource, INews } from 'src/app/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() data: INews[];
  @Input() topData: INews;
  @Input() date: Date;
  @Input() auhor: string;
  @Input() title: string;
  @Input() url: string;
  @Input() id: string;
  @Input() content: string;
  @Input() image: IImage;
  @Input() source: ISource;

  constructor() { }

  ngOnInit() {
  }

}
