import { Component, OnInit, Input } from '@angular/core';
import { ISearchName } from 'src/app/models/search';

@Component({
  selector: 'app-search-item-name',
  templateUrl: './search-item-name.component.html',
  styleUrls: ['./search-item-name.component.scss']
})
export class SearchItemNameComponent implements OnInit {
  @Input() data: ISearchName[];
  @Input() start: number;
  @Input() searchType: string;

  constructor() { }

  ngOnInit() {
  }

}
