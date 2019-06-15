import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-views',
  templateUrl: './recent-views.component.html',
  styleUrls: ['./recent-views.component.scss']
})
export class RecentViewsComponent implements OnInit {
  private link: string;

  constructor() { }

  ngOnInit() {
    this.link = document.location.href;
  }

}
