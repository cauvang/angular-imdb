import { Component, OnInit, Input } from '@angular/core';
import { IShowtimeMovie } from 'src/app/models/showtimes';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { GetDateService } from 'src/app/services/getDate.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-showtime-movie',
  templateUrl: './showtime-movie.component.html',
  styleUrls: ['./showtime-movie.component.scss']
})
export class ShowtimeMovieComponent implements OnInit {

  private movies: IShowtimeMovie[];
  private nMovie: number;
  private today: string;

  constructor(private service: ShowtimesService, private route: ActivatedRoute, private dateService: GetDateService) {
    this.movies = [];
    this.nMovie = 0;

    this.route.url.subscribe(url => {
      this.loadMovies();
    });
  }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.route.params.subscribe((params: Params) => { this.today = params['date']; });
    // console.log("date..", this.today);
    if (this.today === undefined)
      this.today = this.dateService.GetToday_YYYYMMDD();

    this.service.getShowtimesMovie('AU/3030', this.today).subscribe((data) => {
      this.nMovie = data.totalCount;
      this.movies = data.items;
    });
  }
}
