import { Component, OnInit } from '@angular/core';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { IMovie } from 'src/app/models/movies';

@Component({
  selector: 'app-showtime-movie-near',
  templateUrl: './showtime-movie-near.component.html',
  styleUrls: ['./showtime-movie-near.component.scss']
})
export class ShowtimeMovieNearComponent implements OnInit {
  private moviesNear: IMovie[];
  private nMovie: number;

  constructor(private service: ShowtimesService) {
    this.moviesNear = [];
  }

  ngOnInit() {
    this.service.getShowtimesMovie(null, null).subscribe((data) => {
      this.nMovie = data.totalCount;
      this.moviesNear = data.items.slice(0, 12);
    });
  }

}
