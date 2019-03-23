import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IShowtimeMovie, IMetadata } from 'src/app/models/showtimes';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { GetDateService } from 'src/app/services/getDate.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-showtime-movie',
  templateUrl: './showtime-movie.component.html',
  styleUrls: ['./showtime-movie.component.scss']
})
export class ShowtimeMovieComponent implements OnInit {

  private movies: IShowtimeMovie[];
  private nMovie: number;
  private metaData: IMetadata[];
  private today: string;
  private bRefine: boolean;


  constructor(private service: ShowtimesService, private route: ActivatedRoute, private dateService: GetDateService,
    private router: Router) {
    this.movies = [];
    this.metaData = [];
    this.nMovie = 0;

    this.route.url.subscribe(url => {
      this.loadMovies();
    });

    this.bRefine = false;
  }

  ngOnInit() {
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

    this.service.getShowtimesMovie('AU/3030', this.today, queryString).subscribe((data) => {
      this.nMovie = data.totalCount;
      this.movies = data.items;
      this.metaData = data.metadata;
    });
  }

  onRefine() {
    if (this.bRefine == false)
      this.bRefine = true;
    else
      this.bRefine = false;
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
      });
    this.loadMovies();
  }
}

