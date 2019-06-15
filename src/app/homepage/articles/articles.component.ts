import { Component, OnInit, Input } from '@angular/core';
import { IImage, IArticle } from 'src/app/models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  @Input() data: IArticle[];

  constructor() { }

  ngOnInit() {
  }

}
