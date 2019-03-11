import { Component, OnInit } from '@angular/core';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { IGetShowtimeResponse, IShowtime } from 'src/app/models/showtimes';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {
  private moviesNear: IShowtime[];
  private nMovieNear: number;

  constructor(private service: ShowtimesService) {
  }

  ngOnInit() {
    this.service.getShowtimes().subscribe((data) => {
      this.nMovieNear = data.items.length;
      this.moviesNear = data.items.slice(0, 12);
      console.log(this.moviesNear);

    });
  }

}
