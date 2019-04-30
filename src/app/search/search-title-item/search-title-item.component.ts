import { Component, OnInit, Input } from '@angular/core';
import { ISearchTitle } from 'src/app/models/search';

@Component({
  selector: 'app-search-title-item',
  templateUrl: './search-title-item.component.html',
  styleUrls: ['./search-title-item.component.scss']
})
export class SearchTitleItemComponent implements OnInit {
  @Input() data: ISearchTitle[];
  @Input() start: number;
  @Input() searchType: string;

  constructor() { }

  ngOnInit() {
  }

}
