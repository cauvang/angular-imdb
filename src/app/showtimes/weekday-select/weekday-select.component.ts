import { Component, OnInit, Input } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-weekday-select',
  templateUrl: './weekday-select.component.html',
  styleUrls: ['./weekday-select.component.scss']
})
export class WeekdaySelectComponent implements OnInit {
  @Input() type: string;
  private selectedDate: Date;
  private dates: Date[];

  constructor() {
    this.dates = [];
    const today = moment();
    this.selectedDate = today.toDate()

    this.dates.push(today.toDate());
    for (let index = 1; index < 7; index++) {
      this.dates.push(today.add(1, "days").toDate());
    }
  }

  ngOnInit() {
  }

  OnSelectDate(item: Date) {
    this.selectedDate = item;
  }
}
