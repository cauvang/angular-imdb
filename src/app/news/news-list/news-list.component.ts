import { Component, OnInit, Input } from '@angular/core';
import { INews, ISource } from 'src/app/models/news';
import { IImage } from 'src/app/models/article';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() data: INews[];
  
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
