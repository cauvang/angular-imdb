import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paging-number',
  templateUrl: './paging-number.component.html',
  styleUrls: ['./paging-number.component.scss']
})
export class PagingNumberComponent implements OnInit {
  @Input() id: string;
  @Input() pages: number[];
  @Input() currentPage: number;
  @Input() extraParams: any;

  constructor() { }

  ngOnInit() {
  }
  getQuery(page: number) {
    return {
      ...this.extraParams, page
    }
  }
}
