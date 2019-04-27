import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  @Input() start: number;
  @Input() end: number;

  @Input() prevPage: string;
  @Input() nextPage: string;
  @Input() totalItems: number;
  private type = "";

  constructor(private router: Router) {
    this.type = this.router.routerState.snapshot.url.split('?')[0];
  }

  ngOnInit() {
  }


}
