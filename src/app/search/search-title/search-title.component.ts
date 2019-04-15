import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {SearchService} from 'src/app/services/search.service';
import {ISearch, ISorting} from 'src/app/models/search';
import {ILink} from 'src/app/models/chart';

@Component({selector: 'app-search-title', templateUrl: './search-title.component.html', styleUrls: ['./search-title.component.scss']})
export class SearchTitleComponent implements OnInit {
  private searchType : string;
  private data : ISearch;
  private start : number;
  private end : number;

  constructor(private service : SearchService, private route : ActivatedRoute, private router : Router) {
    this.searchType = this
      .router
      .routerState
      .snapshot
      .url
      .split('?')[1];
    //this.route.url.subscribe(url => { this.loadSearch(); });
  }

  ngOnInit() {
    this.loadSearch();
  }

  loadSearch() {
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
  onViewClick(view : string) {
    this
      .router
      .navigateByUrl("/search/title?genres=action&view=" + view);
  }

  onClickNext() {
    this
      .router
      .navigateByUrl(this.data.nextPage)
      .then(() => {
        this.loadSearch();
      });

    return false;
  }

  onClickSort(item : ISorting) {
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
