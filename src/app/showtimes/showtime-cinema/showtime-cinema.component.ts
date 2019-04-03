import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';

import { ShowtimesService } from 'src/app/services/showtimes.service';
import { OverlayStyles } from 'src/app/models/enums';
import { GetDateService } from 'src/app/services/getDate.service';
import { ITheater } from 'src/app/models/showtimes';

@Component({
  selector: 'app-showtime-cinema',
  templateUrl: './showtime-cinema.component.html',
  styleUrls: ['./showtime-cinema.component.scss']
})
export class ShowtimeCinemaComponent implements OnInit {
  public theater: ITheater;
  private id: string;
  private overlayStyle = OverlayStyles.bottomIcon;
  private today: string;

  constructor(private route: ActivatedRoute, private service: ShowtimesService, private dateService: GetDateService,
    private router: Router) {
    this.today = dateService.GetToday_YYYYMMDD();
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.reloadData();
    });
  }

  reloadData() {
    const url = document.location.href;
    console.log("sorturl", url);
    let queryString = "";
    if (url.indexOf("?"))
      queryString = url.split('?')[1];
    console.log("qyery", queryString)
    this.service.getShowtimesCinema(this.id, queryString).subscribe((data) => {
      this.theater = data;
    });
  }

  // onSortChange(queryParams) {
  //   this.router.navigate(
  //     [],
  //     {
  //       relativeTo: this.route,
  //       queryParams,
  //       queryParamsHandling: "merge"
  //     }).then(() => {
  //       this.reloadData();

  //     });

  // }

  onSortChange(sortBy) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: sortBy,
        queryParamsHandling: "merge"
      });
    console.log("fins", document.location.href);
    this.reloadData()

  }

}
