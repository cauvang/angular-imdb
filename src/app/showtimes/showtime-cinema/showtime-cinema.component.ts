import { Component, OnInit } from '@angular/core';
import { IGroup } from 'src/app/models/showtimes';
import { Params, ActivatedRoute } from '@angular/router';
import { ShowtimesService } from 'src/app/services/showtimes.service';

@Component({
  selector: 'app-showtime-cinema',
  templateUrl: './showtime-cinema.component.html',
  styleUrls: ['./showtime-cinema.component.scss']
})
export class ShowtimeCinemaComponent implements OnInit {
  public theater: IGroup;
  public nTheater = 1;
  public today: string;
  private id: string;

  constructor(private route: ActivatedRoute, private service: ShowtimesService) { }

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => { this.today = params['date']; });

    // if (this.today === undefined)
    //   this.today = this.dateService.GetToday_YYYYMMDD();

    // const location = this.locationService.getLocation();
    console.log("load data", location);

    // this.service.getShowtimesTheater(location, this.today).subscribe((data) => {

    //   this.theaters = data.items;
    //   data.items.forEach(element => {
    //     console.log("da", element.items.length);
    //     this.nTheater += element.items.length;
    //   });

    // });
    this.route.params.subscribe((params: Params) => { this.id = params["id"]; });
    this.service.getShowtimesCinema(this.id).subscribe((data) => {
      this.theater = data;
    });


  }


}
