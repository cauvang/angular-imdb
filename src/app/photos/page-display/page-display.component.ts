import { Component, OnInit, Input } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/ngx-bootstrap-pagination';
import { Router } from '@angular/router';
import { IPhoto } from 'src/app/models/photo';

@Component({
  selector: 'app-page-display',
  templateUrl: './page-display.component.html',
  styleUrls: ['./page-display.component.scss']
})
export class PageDisplayComponent implements OnInit {
  @Input() data: IPhoto;
  @Input() queryParams: any;

  private url: string;
  private pages: number[];

  constructor(private router: Router) {
    this.url = router.routerState.snapshot.url.split('?')[0];
  }

  ngOnInit() {
    const pageList = [];
    for (let i = 1; i <= this.data.totalPages; i++) {
      pageList.push(i);
    }
    this.pages = pageList;
    console.log("Data", this.data, this.pages);

  }

  // ngOnChanges(): void {
  //   console.log("bb", this.queryParams)
  //   const pageList = [];
  //   for (let i = 1; i <= this.data.totalPages; i++) {
  //     pageList.push(i);
  //   }
  //   this.pages = pageList;

  // }

  getQuery(page: number) {
    const a = { ...this.queryParams, page };
    return a;
  };
}