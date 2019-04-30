import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ISearchKeyword } from 'src/app/models/search';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-keyword',
  templateUrl: './search-keyword.component.html',
  styleUrls: ['./search-keyword.component.scss']
})
export class SearchKeywordComponent implements OnInit {
  private data: ISearchKeyword;
  private searchType: string;
  private isLoading: boolean;

  constructor(private service: SearchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => { this.loadSearch(); });

  }

  private loadSearch() {
    this.isLoading = true;

    this.searchType = this.router.routerState.snapshot.url.split('?')[1];

    this.service.getSearchKeyword(this.searchType).subscribe(data => {
      this.data = data;
      this.isLoading = false;
    });

  }

  onRefineChange(queryParams) {
    console.log('aa', queryParams);
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: 'merge'
      }).then(() => {
        this.loadSearch();

      });
  }

  onSortChange(sortBy: string) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { sort: sortBy },
        queryParamsHandling: 'merge'
      });
    this.loadSearch();

  }


}
