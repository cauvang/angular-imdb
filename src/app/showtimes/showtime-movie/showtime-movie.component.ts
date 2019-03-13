import { Component, OnInit } from '@angular/core';
import { IShowtimeMovie } from 'src/app/models/showtimes';
import { ShowtimesService } from 'src/app/services/showtimes.service';

@Component({
  selector: 'app-showtime-movie',
  templateUrl: './showtime-movie.component.html',
  styleUrls: ['./showtime-movie.component.scss']
})
export class ShowtimeMovieComponent implements OnInit {

  private movies: IShowtimeMovie[];
  private nMovie: number;
  private today: string;

  constructor(private service: ShowtimesService) {
    this.movies = [];
    this.today = '2019-03-13';
  }

  ngOnInit() {
    this.service.getShowtimesMovie('AU/3026', this.today).subscribe((data) => {
      this.nMovie = data.totalCount;
      this.movies = data.items;
    });
  }
}
