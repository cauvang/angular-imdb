import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ShowtimesService } from 'src/app/services/showtimes.service';
import { ILocation } from 'src/app/models/showtimes';
import { LocationService } from 'src/app/services/location.service';
import * as moment from "moment";


@Component({
  selector: 'app-showtime-home',
  templateUrl: './showtime-home.component.html',
  styleUrls: ['./showtime-home.component.scss']
})
export class ShowtimeHomeComponent implements OnInit {
  private type: string;
  public nMovie = 0;
  public nTheater = 0;
  private selectedDate: string;
  private location: ILocation;


  constructor(private route: ActivatedRoute, private router: Router, private locationService: LocationService) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      const params = (this.route.firstChild.params as any)._value;
      if (params["country"]) {
        this.location = {
          country: params["country"],
          postcode: params["zipcode"]
        };
      }
      else
        this.location = this.locationService.getLocation();

      if (params["date"])
        this.selectedDate = params["date"];
      else
        this.selectedDate = moment().format("YYYY-MM-DD");

      this.type = this.router.routerState.snapshot.url.split('/')[2];
      this.loadData();
    });

    this.locationService.getLocationEvent.subscribe((x) => {
      this.location = x;
      this.loadData();
    });
  }

  loadData() {
    const url = document.location.href;
    let queryString = "";
    if (url.indexOf("?"))
      queryString = url.split('?')[1];


    this.nMovie = 0;
    // this.service.getShowtimesMovie(this.location, this.today, queryString).subscribe((data) => {
    //   this.nMovie = data.totalCount;
    // });

    this.nTheater = 0;
    // this.service.getShowtimesTheater(this.location, this.today).subscribe((data) => {
    //   data.items.forEach(element => {
    //     this.nTheater += element.items.length;
    //   });
    // });
  }

  isActivatedTab(tabName: string) {
    return document.location.href.includes(tabName);
  }

  onDateChange(date: Date) {
    this.selectedDate = moment(date).format("YYYY-MM-DD");
  }
  onLocationChange(location: ILocation) {
    this.location.country = location.country;
    this.location.postcode = location.postcode;
  }
}
