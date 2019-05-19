import { Component, OnInit } from '@angular/core';
import { IGetMovieResponse } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-coming-soon',
  templateUrl: './movie-coming-soon.component.html',
  styleUrls: ['./movie-coming-soon.component.scss']
})
export class MovieComingSoonComponent implements OnInit {

  private data: IGetMovieResponse[];
  private movieType: string;
  private isLoading: boolean;

  constructor(private service: MoviesService, private router: Router) {
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

  trimSpace(inputData: string) {
    return inputData.replace(' ', '');
  }

}
