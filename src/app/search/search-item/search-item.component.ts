import { Component, OnInit, Input } from '@angular/core';
import { ISearchTitle } from 'src/app/models/search';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() data: ISearchTitle[];
  @Input() start: number;
  @Input() searchType: string;

  constructor() { }

  ngOnInit() {
  }

}
