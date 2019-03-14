import { Component, OnInit } from '@angular/core';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { IShowtimeTheater, IShowtimeGroup } from 'src/app/models/showtimes';

@Component({
  selector: 'app-showtime-theater',
  templateUrl: './showtime-theater.component.html',
  styleUrls: ['./showtime-theater.component.scss']
})
export class ShowtimeTheaterComponent implements OnInit {

  private theaters: IShowtimeGroup[];
  private nTheater: number;
  private today: string;

  constructor(private service: ShowtimesService) {
    this.theaters = [];
    this.today = '2019-03-14';
    this.nTheater = 0;
  }

  ngOnInit() {
    this.service.getShowtimesTheater('AU/3030', this.today).subscribe((data) => {
      this.theaters = data.items;
      data.items.forEach(element => {
        this.nTheater += element.items.length;
      });

    });
  }

}
