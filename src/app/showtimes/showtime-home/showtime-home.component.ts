import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GetDateService } from 'src/app/services/getDate.service';
import { ShowtimesService } from 'src/app/services/showtimes.service';

@Component({
  selector: 'app-showtime-home',
  templateUrl: './showtime-home.component.html',
  styleUrls: ['./showtime-home.component.scss']
})
export class ShowtimeHomeComponent implements OnInit {
  private type: string;
  public nMovie: number;
  public nTheater = 0;
  private postcode = "3030";
  private country = "AU";
  private countryList: string[] = ["AR", "AU", "CA", "CL", "ES", "FR", "IT", "MX", "NZ", "PT", "UK", "US"];

  constructor(private route: ActivatedRoute, private router: Router,
    private service: ShowtimesService, private dateService: GetDateService) {
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
    this.loadData();
  }

  loadData() {
    let today = "";
    this.route.params.subscribe((params: Params) => { today = params['date']; });

    const url = document.location.href;
    let queryString = "";

    if (url.indexOf("?")) {
      queryString = url.split('?')[1];
    }
    if (today === undefined)
      today = this.dateService.GetToday_YYYYMMDD();

    this.service.getShowtimesMovie(this.country + "/" + this.postcode, today, queryString).subscribe((data) => {
      this.nMovie = data.totalCount;
    });

    this.service.getShowtimesTheater(this.country + "/" + this.postcode, today).subscribe((data) => {
      data.items.forEach(element => {
        this.nTheater += element.items.length;
      });
    });
  }
}
