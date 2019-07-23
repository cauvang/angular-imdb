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
  private currentPage: string = "1";

  constructor(private router: Router, private route: ActivatedRoute) {
    this.url = router.routerState.snapshot.url;
    route.queryParams.subscribe(params => {
      this.queryParams = params;
      if (params["page"])
        this.currentPage = params["page"];

    });
  }

  ngOnInit() {
    this.displayPages();

  }
  ngOnChanges() {
    this.displayPages();
  }

  displayPages() {
    this.initPages();
    this.display = this.data.display.split('\n')[0];

  }
  getQuery(page: number, isNext: boolean) {
    if (isNext) {
      let temp: string = page.toString();
      page = parseInt(temp) + 1;
    }
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