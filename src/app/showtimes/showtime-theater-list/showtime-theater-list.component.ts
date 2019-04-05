import { Component, OnInit, Input } from '@angular/core';

import { IGroup, ILocation } from 'src/app/models/showtimes';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-showtime-theater-list',
  templateUrl: './showtime-theater-list.component.html',
  styleUrls: ['./showtime-theater-list.component.scss']
})
export class ShowtimeTheaterListComponent implements OnInit {
  @Input() data: IGroup[];
  @Input() nTheater: number;
  @Input() today: string;
  private location: ILocation;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.location = this.locationService.getLocation();

  }
}
