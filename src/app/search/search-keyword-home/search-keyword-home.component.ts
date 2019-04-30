import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-keyword-home',
  templateUrl: './search-keyword-home.component.html',
  styleUrls: ['./search-keyword-home.component.scss']
})
export class SearchKeywordHomeComponent implements OnInit {
  private data: string[];
  private keyword: string;

  constructor(private service: SearchService, private router: Router) { }

  ngOnInit() {
    this.service.getSearchKeywordList().subscribe(data => { this.data = data; });
  }

  private getKeyword(kw: string) {
    return kw.replace(' ', '-');
  }

  private onGo() {
    this.router.navigateByUrl('/find?s=kw&q=' + this.keyword);
  }
}
