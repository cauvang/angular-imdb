import { Component, OnInit } from '@angular/core';
import { IGroup } from 'src/app/models/showtimes';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-showtime-theater-near',
  templateUrl: './showtime-theater-near.component.html',
  styleUrls: ['./showtime-theater-near.component.scss']
})
export class ShowtimeTheaterNearComponent implements OnInit {

  private theatersNear: IGroup[];
  private nTheater: number;

  constructor(private locationService: LocationService, private service: ShowtimesService) {
    this.theatersNear = [];
    this.nTheater = 0;
  }

  ngOnInit() {
    const location = this.locationService.getLocation();
    this.service.getShowtimesTheater(location, null).subscribe((data) => {
      this.theatersNear = data.items;
      data.items.forEach(element => {
        this.nTheater += element.items.length;
      });
    });

  }
}
