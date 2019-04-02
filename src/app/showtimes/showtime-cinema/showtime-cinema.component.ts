import { Component, OnInit } from '@angular/core';
import { ITheater } from 'src/app/models/showtimes';
import { Params, ActivatedRoute } from '@angular/router';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { OverlayStyles } from 'src/app/models/enums';

@Component({
  selector: 'app-showtime-cinema',
  templateUrl: './showtime-cinema.component.html',
  styleUrls: ['./showtime-cinema.component.scss']
})
export class ShowtimeCinemaComponent implements OnInit {
  public theater: ITheater;
  private id: string;
  private overlayStyle = OverlayStyles.bottomIcon;
  constructor(private route: ActivatedRoute, private service: ShowtimesService) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => { this.id = params["id"]; });
    this.service.getShowtimesCinema(this.id).subscribe((data) => {
      this.theater = data;
    });


  }


}
