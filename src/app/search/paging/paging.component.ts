import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit, OnChanges {
  @Input() start: number;
  @Input() end: number;

  @Input() prevPage: string;
  @Input() nextPage: string;
  @Input() totalItems: number;
  private type = "";

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.nextPage)
      this.type = this.nextPage.split("?")[0];
    else
      this.type = this.prevPage.split("?")[0];

  }
}
