import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GetDateService } from 'src/app/services/getDate.service';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { LocationService } from 'src/app/services/location.service';
import { ILocation } from 'src/app/models/showtimes';

@Component({
  selector: 'app-showtime-home',
  templateUrl: './showtime-home.component.html',
  styleUrls: ['./showtime-home.component.scss']
})
export class ShowtimeHomeComponent implements OnInit {
  private type: string;
  public nMovie = 0;
  public nTheater = 0;
  private today = "";

  private location: ILocation = {
    postcode: "3030",
    country: "AU"
  }
  private countryList: string[] = ["AR", "AU", "CA", "CL", "ES", "FR", "IT", "MX", "NZ", "PT", "UK", "US"];
  public bChange = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private service: ShowtimesService, private dateService: GetDateService,
    private locationService: LocationService) {
    // this.route.url.subscribe(url => {
    //   const tmp = router.routerState.snapshot.url.split('/');
    //   this.type = tmp[2];
    // });
    this.location = locationService.getLocation();
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      const tmp = this.router.routerState.snapshot.url.split('/');
      console.log("tmp", tmp)
      this.type = tmp[2] + '/' + this.location.country + '/' + this.location.postcode;
    });
    this.loadData();
  }

  loadData() {
    this.route.params.subscribe((params: Params) => { this.today = params['date']; });

    const url = document.location.href;
    let queryString = "";

    if (url.indexOf("?")) {
      queryString = url.split('?')[1];
    }
    if (this.today === undefined)
      this.today = this.dateService.GetToday_YYYYMMDD();

    this.service.getShowtimesMovie(this.location, this.today, queryString).subscribe((data) => {
      this.nMovie = data.totalCount;
    });

    this.service.getShowtimesTheater(this.location, this.today).subscribe((data) => {
      data.items.forEach(element => {
        this.nTheater += element.items.length;
      });
    });
  }

  onChangeClick() {
    this.bChange = true;
  }

  onClickGo() {
    this.bChange = false;
    this.locationService.setLocation(this.location);
    this.loadData();
  }

  onCancel() {
    this.bChange = false;
  }
}
