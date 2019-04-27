import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISearchName, ISearchResult } from 'src/app/models/search';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-name-text',
  templateUrl: './search-name-text.component.html',
  styleUrls: ['./search-name-text.component.scss']
})
export class SearchNameTextComponent implements OnInit {
  private searchType: string;
  private data: ISearchResult<ISearchName>;
  private start: number;
  private end: number;
  private isLoading: boolean;
  private totalItem: number;

  constructor(private service: SearchService, private route: ActivatedRoute, private router: Router) {
    this.searchType = this.router.routerState.snapshot.url.split('?')[1];
    this.route.queryParams.subscribe(params => { this.loadSearch(); })
  }

  ngOnInit() {
    this.loadSearch();
  }

  loadSearch() {
    this.isLoading = true;

    this.searchType = this.router.routerState.snapshot.url.split('?')[1];
    this.service.getSearchNameText(this.searchType).subscribe((data) => {
      this.data = data;
      this.start = data.start || 1;
      this.end = data.to;
      this.totalItem = data.totalItems;
      if (data.totalPages === 1) {
        this.start = null;
        this.end = null;
      }

      this.isLoading = false;
    });
  }
}
