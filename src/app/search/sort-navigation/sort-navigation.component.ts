import { Component, OnInit, Input } from '@angular/core';
import { ISorting } from 'src/app/models/search';

@Component({
  selector: 'app-sort-navigation',
  templateUrl: './sort-navigation.component.html',
  styleUrls: ['./sort-navigation.component.scss']
})
export class SortNavigationComponent implements OnInit {
  @Input() type: string;
  @Input() data: ISorting;

  constructor() { }

  ngOnInit() {
  }


}
