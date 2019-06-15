import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IPhoto } from 'src/app/models/photo';

@Component({
  selector: 'app-page-display',
  templateUrl: './page-display.component.html',
  styleUrls: ['./page-display.component.scss']
})
export class PageDisplayComponent implements OnInit {
  @Input() data: IPhoto;
  private queryParams: any;

  private url: string;
  private pages: number[];
  private display: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.url = router.routerState.snapshot.url;

    // if (this.queryParams === undefined)
    route.queryParams.subscribe(params => { this.queryParams = params; });
  }

  ngOnInit() {
    this.initPages();
    this.display = this.data.display.split('\n')[0];
  }
  ngOnChanges() {
    this.initPages();
    this.display = this.data.display.split('\n')[0];


  }
  getQuery(page: number) {
    return { ...this.queryParams, page };
  };

  initPages() {
    const pageList = [];
    for (let i = 1; i <= this.data.totalPages; i++) {
      pageList.push(i);
    }
    this.pages = pageList;
  }
}