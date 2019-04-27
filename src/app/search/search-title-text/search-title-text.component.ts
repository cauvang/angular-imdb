import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchService } from 'src/app/services/search.service';
import { ISearchResult, ISearchTitle } from 'src/app/models/search';

@Component({
  selector: 'app-search-title-text',
  templateUrl: './search-title-text.component.html',
  styleUrls: ['./search-title-text.component.scss']
})
export class SearchTitleTextComponent implements OnInit {
  private searchType: string;
  private data: ISearchResult<ISearchTitle>;
  private start: number;
  private end: number;
  private isLoading: boolean;
  private totalItem: number;

  constructor(private service: SearchService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => { this.loadSearch(); })
  }

  ngOnInit() {
    this.loadSearch();
  }

  loadSearch() {
    this.isLoading = true;

    this.searchType = this.router.routerState.snapshot.url.split('?')[1];
    this.service.getSearchTitleText(this.searchType).subscribe((data) => {
      this.data = data;
      this.start = data.start || 1;
      this.end = data.to;
      // if (data.totalPages === 1) {
      //   this.start = null;
      //   this.end = null;
      // }
      this.totalItem = data.totalItems;

      this.isLoading = false;
    });
  }



}
