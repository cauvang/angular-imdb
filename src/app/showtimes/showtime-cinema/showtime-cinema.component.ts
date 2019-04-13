import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';

import { ShowtimesService } from 'src/app/services/showtimes.service';
import { OverlayStyles } from 'src/app/models/enums';
import { ITheater, ILocation } from 'src/app/models/showtimes';

@Component({
  selector: 'app-showtime-cinema',
  templateUrl: './showtime-cinema.component.html',
  styleUrls: ['./showtime-cinema.component.scss']
})
export class ShowtimeCinemaComponent implements OnInit {
  public theater: ITheater;
  private id: string;
  private overlayStyle = OverlayStyles.bottomIcon;
  private selectedDate: string;
  private location: ILocation;

  constructor(private route: ActivatedRoute, private service: ShowtimesService, private router: Router) {
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.selectedDate = params['date'];
      this.location = {
        country: params['country'],
        postcode: params['zipcode']
      };
      this.reloadData();
    });
  }

  reloadData() {
    const url = document.location.href;
    let queryString = '';
    if (url.indexOf('?')) {
      queryString = url.split('?')[1];
    }
    this.service.getShowtimesCinema(this.location, this.selectedDate, this.id, queryString).subscribe((data) => {
      this.theater = data;
    });
  }

  onSortChange(sortBy) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: sortBy,
        queryParamsHandling: 'merge'
      });
    this.reloadData();
  }

}
