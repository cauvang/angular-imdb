import { Component, OnInit } from '@angular/core';
import { IShowtimeGroup } from 'src/app/models/showtimes';
import { ShowtimesService } from 'src/app/services/showtimes.service';

@Component({
  selector: 'app-showtime-theater-near',
  templateUrl: './showtime-theater-near.component.html',
  styleUrls: ['./showtime-theater-near.component.scss']
})
export class ShowtimeTheaterNearComponent implements OnInit {



  private theatersNear: IShowtimeGroup[];
  private nTheater: number;

  constructor(private service: ShowtimesService) {
    this.theatersNear = [];
    this.nTheater = 0;
  }

  ngOnInit() {
    this.service.getShowtimesTheater().subscribe((data) => {
      this.theatersNear = data.items;
      data.items.forEach(element => {
        this.nTheater += element.items.length;
      });
    });

    console.log(this.nTheater);
  }
}
