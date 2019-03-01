import { Component, OnInit, Input } from '@angular/core';
import { INews } from 'src/app/models/news';

@Component({
  selector: 'app-news-abb',
  templateUrl: './news-abb.component.html',
  styleUrls: ['./news-abb.component.scss']
})
export class NewsAbbComponent implements OnInit {

  @Input() data: INews[];
  @Input() date: Date;
  @Input() auhor: string;
  @Input() title: string;
  @Input() newsType: string;

  constructor() {

  }

  ngOnInit() {
  }

}
