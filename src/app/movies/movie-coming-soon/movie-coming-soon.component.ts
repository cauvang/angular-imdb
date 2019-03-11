import { Component, OnInit } from '@angular/core';
import { IGetMovieResponse } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-coming-soon',
  templateUrl: './movie-coming-soon.component.html',
  styleUrls: ['./movie-coming-soon.component.scss']
})
export class MovieComingSoonComponent implements OnInit {

  private data: IGetMovieResponse[];
  private movieType: string;
  private isLoading: boolean;

  constructor(private service: MoviesService, private route: ActivatedRoute, private router: Router) {
    console.log(router);
    // this.route.url.subscribe(url => {
    //   this.loadList();
    // });
    this.isLoading = false;
  }


  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.data = [];
    this.isLoading = true;
    this.movieType = this.router.routerState.snapshot.url.split('/')[2];
    // console.log(this.movieType);



    this.service.getMovies(this.movieType).subscribe((data) => {
      this.data = data;
      this.isLoading = false;

    });
  }

}
