import { Component, OnInit } from '@angular/core';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { IGroup } from 'src/app/models/showtimes';
import { Params, ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import * as moment from "moment";

@Component({
  selector: 'app-showtime-theater',
  templateUrl: './showtime-theater.component.html',
  styleUrls: ['./showtime-theater.component.scss']
})
export class ShowtimeTheaterComponent implements OnInit {

  public theaters: IGroup[];
  public nTheater: number;
  public today: string;

  constructor(private locationService: LocationService, private service: ShowtimesService, private route: ActivatedRoute) {
    this.theaters = [];
    this.nTheater = 0;

  }

  ngOnInit() {
    this.route.url.subscribe(url => { this.loadTheaters(); });
  }

  loadTheaters() {
    this.nTheater = 0;
    this.route.params.subscribe((params: Params) => { this.today = params['date']; });

    if (this.today === undefined)
      this.today = moment().format("YYYY-MM-DD");

    const location = this.locationService.getLocation();
    this.service.getShowtimesTheater(location, this.today).subscribe((data) => {

      this.theaters = data.items;
      data.items.forEach(element => {
        this.nTheater += element.items.length;
      });

    });
  }
}

