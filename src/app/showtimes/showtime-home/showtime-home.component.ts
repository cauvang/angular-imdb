import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { GetDateService } from 'src/app/services/getDate.service';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { ILocation } from 'src/app/models/showtimes';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-showtime-home',
  templateUrl: './showtime-home.component.html',
  styleUrls: ['./showtime-home.component.scss']
})
export class ShowtimeHomeComponent implements OnInit {
  private type: string;
  public nMovie = 0;
  public nTheater = 0;
  private today = "";
  private location: ILocation;

  constructor(private route: ActivatedRoute, private router: Router, private service: ShowtimesService,
    private dateService: GetDateService, private locationService: LocationService) {

  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      const params = (this.route.firstChild.params as any)._value;
      if (params["country"]) {
        this.location = {
          country: params["country"],
          postcode: params["zipcode"]
        }
      }
      else {
        this.location = this.locationService.getLocation()
      }
      if (params["date"]) {
        this.today = params["date"];
      }
      else
        this.today = this.dateService.GetToday_YYYYMMDD();

      const tmp = this.router.routerState.snapshot.url.split('/');
      this.type = tmp[2] + '/' + this.location.country + '/' + this.location.postcode;
      this.loadData();
    });

    // this.route.params.subscribe((params: Params) => {
    //   this.today = params['date'];
    //   console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx", params);
    //   this.loadData();
    // });

    this.locationService.getLocationEvent.subscribe((x) => {
      this.location = x;
      this.loadData();
      console.log("new location set", x);
    })
  }

  loadData() {

    const url = document.location.href;
    let queryString = "";
    if (url.indexOf("?"))
      queryString = url.split('?')[1];

    if (this.today === undefined)
      this.today = this.dateService.GetToday_YYYYMMDD();

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



}
