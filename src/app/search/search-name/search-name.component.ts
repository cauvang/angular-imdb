import { Component, OnInit } from '@angular/core';
import { ISearchName, ISearchResult } from 'src/app/models/search';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.scss']
})
export class SearchNameComponent implements OnInit {

  private searchType: string;
  private data: ISearchResult<ISearchName>;
  private start: number;
  private end: number;
  private isLoading: boolean;
  private totalItem: number;

  constructor(private service: SearchService, private route: ActivatedRoute, private router: Router) {
    this.searchType = this.router.routerState.snapshot.url.split('?')[1];
    this.route.queryParams.subscribe(params => { this.loadSearch(); });
  }

  ngOnInit() {
    this.loadSearch();
  }

  loadSearch() {
    this.isLoading = true;

    this.searchType = this.router.routerState.snapshot.url.split('?')[1];
    this.service.getSearchName(this.searchType).subscribe((data) => {
      this.data = data;
      this.start = parseInt(data.query.start || '1', 10);
      const end = this.start + parseInt(data.query.count, 10) - 1;
      this.end = end > data.totalItems ? data.totalItems : end;
      this.totalItem = data.totalItems;
      if (data.totalPages === 1) {
        this.start = null;
        this.end = null;
      }

      this.isLoading = false;
    });
  }
}
