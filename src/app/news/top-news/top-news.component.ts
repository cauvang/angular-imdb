import { Component, OnInit, Input } from '@angular/core';
import { INews, ISource } from 'src/app/models/news';
import { IImage } from 'src/app/models/article';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {
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
