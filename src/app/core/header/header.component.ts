import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private findText: string;
  private findSelected: string;

  private todayBirthdayQueryParams: {
    birth_monthday: string;
    refine: string;
  }

  constructor() {
    this.todayBirthdayQueryParams = {
      birth_monthday: moment().format("MM-DD"),
      refine: "birth_monthday"
    }
  }

  ngOnInit() {
  }

  onFindClick(item: any) {
    console.log("find", this.findText, item);
  }
}
