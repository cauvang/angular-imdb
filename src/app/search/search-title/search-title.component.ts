import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchService } from 'src/app/services/search.service';
import { ISearch, ISorting } from 'src/app/models/search';

@Component({
  selector: 'app-search-title',
  templateUrl: './search-title.component.html',
  styleUrls: ['./search-title.component.scss']
})
@Component({ selector: 'app-search-title', templateUrl: './search-title.component.html', styleUrls: ['./search-title.component.scss'] })
export class SearchTitleComponent implements OnInit {
  private searchType: string;
  private data: ISearch;
  private start: number;
  private end: number;
  private isLoading: boolean;

  constructor(private service: SearchService, private route: ActivatedRoute, private router: Router) {
    this.searchType = this
      .router
      .routerState
      .snapshot
      .url
      .split('?')[1];
    this.route.queryParams.subscribe(params => { this.loadSearch(); })
  }

  ngOnInit() {
    this.loadSearch();
  }

  loadSearch() {
    this.isLoading = true;

    this.searchType = this.router.routerState.snapshot.url.split('?')[1];
    this.service.getSearchResult(this.searchType).subscribe((data) => {
      this.data = data;
      this.start = parseInt(data.query.start || "1");
      const end = this.start + parseInt(data.query.count) - 1;
      this.end = end > data.totalItems ? data.totalItems : end;
      this.isLoading = false;

    });
    this.searchType = this
      .router
      .routerState
      .snapshot
      .url
      .split('?')[1];
    this
      .service
      .getSearchResult(this.searchType)
      .subscribe((data) => {
        this.data = data;
        this.start = parseInt(data.query.start || "1");
        this.end = this.start + parseInt(data.query.count) - 1;
      });
  }
  onViewClick(view: string) {
    this
      .router
      .navigateByUrl("/search/title?genres=action&view=" + view);
  }


  onClickSort(item: ISorting) {
    console.log(item.url)
    this
      .router
      .navigateByUrl(item.url)
      .then(() => {
        this.loadSearch();
      });

    return false;
  }
}
