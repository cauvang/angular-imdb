import { Component, OnInit, Input } from '@angular/core';
import { INews } from 'src/app/models/news';

@Component({
  selector: 'app-related-news',
  templateUrl: './related-news.component.html',
  styleUrls: ['./related-news.component.scss']
})
export class RelatedNewsComponent implements OnInit {
  @Input() data: INews[];

  constructor() { }

  ngOnInit() {
  }

}
