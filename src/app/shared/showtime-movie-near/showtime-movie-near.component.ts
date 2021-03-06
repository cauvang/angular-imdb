import { Component, OnInit, Input } from '@angular/core';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { IMovie } from 'src/app/models/movies';
import { LocationService } from 'src/app/services/location.service';
import { MovieDisplayStyle } from 'src/app/models/enums';
import { ILocation } from 'src/app/models/showtimes';

@Component({
  selector: 'app-showtime-movie-near',
  templateUrl: './showtime-movie-near.component.html',
  styleUrls: ['./showtime-movie-near.component.scss']
})
export class ShowtimeMovieNearComponent implements OnInit {
  private moviesNear: IMovie[];
  private nMovie: number;
  @Input() nMovieDisplayed: number;
  @Input() movieDisplayStyle: MovieDisplayStyle;
  private location: ILocation;

  constructor(private locationService: LocationService, private service: ShowtimesService) {
    this.moviesNear = [];
  }

  ngOnInit() {
    this.location = this.locationService.getLocation();
    this.service.getShowtimesMovie(this.location, null).subscribe((data) => {
      this.nMovie = data.totalCount;
      this.moviesNear = data.items.slice(0, this.nMovieDisplayed);
    });

  }

}
