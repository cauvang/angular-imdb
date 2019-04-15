import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  @Input() start: number;
  @Input() end: number;

  @Input() prevPage: string;
  @Input() nextPage: string;
  @Input() totalItems: number;

  constructor() { }

  ngOnInit() {
  }

}
