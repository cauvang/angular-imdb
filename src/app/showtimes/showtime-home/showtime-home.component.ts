import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showtime-home',
  templateUrl: './showtime-home.component.html',
  styleUrls: ['./showtime-home.component.scss']
})
export class ShowtimeHomeComponent implements OnInit {
  private type: string;
  private nMovie: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    // this.route.url.subscribe(url => {
    //   const tmp = router.routerState.snapshot.url.split('/');
    //   this.type = tmp[2];
    // });
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      const tmp = this.router.routerState.snapshot.url.split('/');
      this.type = tmp[2];
    });
    // console.log(this.type);
  }

  getMovieCount(nMovie) {
    this.nMovie = nMovie;
    console.log("nMovie", this.nMovie);
  }
}
