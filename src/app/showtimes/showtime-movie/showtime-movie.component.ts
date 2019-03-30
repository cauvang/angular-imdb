import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { IMetadata } from 'src/app/models/showtimes';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { GetDateService } from 'src/app/services/getDate.service';
import { IMovie } from 'src/app/models/movies';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-showtime-movie',
  templateUrl: './showtime-movie.component.html',
  styleUrls: ['./showtime-movie.component.scss']
})
export class ShowtimeMovieComponent implements OnInit {

  private movies: IMovie[];
  private nMovie: number;
  private metaData: IMetadata[];
  private today: string;

  constructor(private locationService: LocationService, private service: ShowtimesService, private route: ActivatedRoute, private dateService: GetDateService,
    private router: Router) {
    this.movies = [];
    this.metaData = [];
    this.nMovie = 0;



  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.loadMovies();
    });

    this.route.params.subscribe((params: Params) => { this.today = params['date']; });

    this.loadMovies();
  }

  loadMovies() {

    const url = document.location.href;

    let queryString = "";

    if (url.indexOf("?")) {
      queryString = url.split('?')[1];
    }

    if (this.today === undefined)
      this.today = this.dateService.GetToday_YYYYMMDD();

    const location = this.locationService.getLocation();
    this.service.getShowtimesMovie(location, this.today, queryString).subscribe((data) => {
      this.nMovie = data.totalCount;
      this.movies = data.items;
      this.metaData = data.metadata;
    });

  }



  onSortChange(sortBy: string) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { sort: sortBy },
        queryParamsHandling: "merge"
      });
    this.loadMovies();

  }

  onRefineChange(queryParams) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: "merge"
      }).then(() => {
        this.loadMovies();

      });
  }
}

