import { Component, OnInit, Input } from '@angular/core';
import { ISearchName } from 'src/app/models/search';

@Component({
  selector: 'app-search-name-item',
  templateUrl: './search-name-item.component.html',
  styleUrls: ['./search-name-item.component.scss']
})
export class SearchNameItemComponent implements OnInit {
  @Input() data: ISearchName[];
  @Input() start: number;
  @Input() searchType: string;

  constructor() { }

  ngOnInit() {
  }

}
