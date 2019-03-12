import { Component, OnInit } from '@angular/core';
import { IShowtimeMovie } from 'src/app/models/showtimes';
import { ShowtimesService } from 'src/app/services/showtimes.service';

@Component({
  selector: 'app-showtime-movie-near',
  templateUrl: './showtime-movie-near.component.html',
  styleUrls: ['./showtime-movie-near.component.scss']
})
export class ShowtimeMovieNearComponent implements OnInit {


  private moviesNear: IShowtimeMovie[];
  private nMovie: number;

  constructor(private service: ShowtimesService) {
    this.moviesNear = [];
  }

  ngOnInit() {
    this.service.getShowtimesMovie().subscribe((data) => {
      this.nMovie = data.totalCount;
      this.moviesNear = data.items.slice(0, 12);
    });
  }

}
