import { Component, OnInit, Input } from '@angular/core';
import { IResultResponse } from 'src/app/models/find';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-abb',
  templateUrl: './find-abb.component.html',
  styleUrls: ['./find-abb.component.scss']
})
export class FindAbbComponent implements OnInit {
  @Input() result: IResultResponse;
  @Input() displayAll: boolean;
  queryParams: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.queryParams = queryParams;
    });
  }
}