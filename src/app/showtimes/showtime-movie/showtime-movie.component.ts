import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { IMetadata, IGetShowtimeMovieResponse } from 'src/app/models/showtimes';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { IMovie } from 'src/app/models/movies';
import { LocationService } from 'src/app/services/location.service';
import * as moment from 'moment';

@Component({
  selector: 'app-showtime-movie',
  templateUrl: './showtime-movie.component.html',
  styleUrls: ['./showtime-movie.component.scss']
})
export class ShowtimeMovieComponent implements OnInit {
  private data: IGetShowtimeMovieResponse;
  private selectedDate: string;

  constructor(private locationService: LocationService, private service: ShowtimesService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.url.subscribe(url => { this.loadMovies(); });
  }

  loadMovies() {
    this.route.params.subscribe((params: Params) => { this.selectedDate = params['date']; });

    const url = document.location.href;
    let queryString = '';
    if (url.indexOf('?')) {
      queryString = url.split('?')[1];
    }

    if (this.selectedDate === undefined) {
      this.selectedDate = moment().format('YYYY-MM-DD');
    }

    const location = this.locationService.getLocation();
    this.service.getShowtimesMovie(location, this.selectedDate, queryString).subscribe((data) => {
      this.data = data;
    });

  }

  onSortChange(sortBy: string) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { sort: sortBy },
        queryParamsHandling: 'merge'
      });
    this.loadMovies();

  }

  onRefineChange(queryParams) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: 'merge'
      }).then(() => {
        this.loadMovies();

      });
  }
}

