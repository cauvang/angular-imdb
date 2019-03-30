import { Component, OnInit } from '@angular/core';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { IMovie } from 'src/app/models/movies';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-showtime-movie-near',
  templateUrl: './showtime-movie-near.component.html',
  styleUrls: ['./showtime-movie-near.component.scss']
})
export class ShowtimeMovieNearComponent implements OnInit {
  private moviesNear: IMovie[];
  private nMovie: number;

  constructor(private locationService: LocationService, private service: ShowtimesService) {
    this.moviesNear = [];
  }

  ngOnInit() {
    const location = this.locationService.getLocation();
    this.service.getShowtimesMovie(location, null).subscribe((data) => {
      this.nMovie = data.totalCount;
      this.moviesNear = data.items.slice(0, 12);
    });
  }

}
