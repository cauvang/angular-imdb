import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from 'src/app/models/photo';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/ngx-bootstrap-pagination';

@Component({
  selector: 'app-page-display',
  templateUrl: './page-display.component.html',
  styleUrls: ['./page-display.component.scss']
})
export class PageDisplayComponent implements OnInit {
  @Input() data: IPhoto;
  @Input() id: string;
  @Input() queryParams: any;
  // private pages: number[];

  // numberOfPages = 10;
  currentPage = 1;
  totalItems = 0;

  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   // const pageList = [];
  //   // for (let i = 1; i <= this.data.totalPages; i++) {
  //   //   pageList.push(i);
  //   // }
  //   // this.pages = pageList;
  // }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    // this.pageData = this.filteredData.slice(startItem, endItem);
  }

}
