import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IGetMovieResponse } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-theatre',
  templateUrl: './movie-theatre.component.html',
  styleUrls: ['./movie-theatre.component.scss']
})
export class MovieTheatreComponent implements OnInit {
  private data: IGetMovieResponse[];
  private movieType: string;
  private isLoading: boolean;

  constructor(private service: MoviesService, private route: ActivatedRoute, private router: Router) {
    this.isLoading = false;
  }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.data = [];
    this.isLoading = true;
    this.movieType = this.router.routerState.snapshot.url.split('/')[2];

    this.service.getMovies(this.movieType).subscribe((data) => {
      this.data = data;
      this.isLoading = false;
    });

  }
}
