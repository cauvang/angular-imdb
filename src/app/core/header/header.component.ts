import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private qParam: string;
  private sParam: string;
  private findSelected = "All";

  private todayBirthdayQueryParams: {
    birth_monthday: string;
    refine: string;
  }

  constructor(private router: Router) {
    this.todayBirthdayQueryParams = {
      birth_monthday: moment().format("MM-DD"),
      refine: "birth_monthday"
    }
  }

  ngOnInit() {
  }

  onFindClick() {
    if (this.qParam)
      this.router.navigateByUrl("/find?q=" + this.qParam + "&s=" + this.sParam);
  }

  onClickDropdown(s: string, findSelected: string) {
    this.findSelected = findSelected;
    this.sParam = s;

  }
}
