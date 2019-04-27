import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-keyword-routing',
  templateUrl: './search-keyword-routing.component.html',
  styleUrls: ['./search-keyword-routing.component.scss']
})
export class SearchKeywordRoutingComponent implements OnInit {
  private hasParam: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(url => {
      this.hasParam = url == null ? false : true;
    });
  }

  ngOnInit() {
    const b = this.router.routerState.snapshot.url.split('?');
    this.hasParam = b.length == 2 ? true : false;
  }

}
