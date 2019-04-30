import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import * as moment from 'moment';
import { LocationService } from 'src/app/services/location.service';
import { ILocation } from 'src/app/models/showtimes';

@Component({
  selector: 'app-weekday-select',
  templateUrl: './weekday-select.component.html',
  styleUrls: ['./weekday-select.component.scss']
})
export class WeekdaySelectComponent implements OnInit {
  @Input() type: string;
  private selectedDate: Date;
  private dates: Date[];
  private location: ILocation;
  @Output() dateChange = new EventEmitter();

  constructor(private route: ActivatedRoute, private locationService: LocationService) {
    this.dates = [];
    const today = moment();

    this.dates.push(today.toDate());
    for (let index = 1; index < 7; index++) {
      this.dates.push(today.add(1, 'days').toDate());
    }
  }

  ngOnInit() {
    if (this.route.firstChild) {
      this.route.firstChild.params.subscribe((params: Params) => {
        if (params['date']) {
          this.selectedDate = new Date(params['date']);
        } else {
          this.selectedDate = moment().toDate();
        }

        if (params['location']) {
          this.location = {
            country: params['country'],
            postcode: params['zipcode']
          };
        } else {
          this.location = this.locationService.getLocation();
        }

      });
    } else {
      this.location = this.locationService.getLocation();
      this.selectedDate = moment().toDate();
    }


  }

  OnSelectDate(item: Date) {
    this.selectedDate = item;
    this.dateChange.emit(item);
  }
}
