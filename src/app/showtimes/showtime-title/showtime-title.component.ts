import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IMovie } from 'src/app/models/movies';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { IGroup, ILocation } from 'src/app/models/showtimes';
import * as moment from "moment";

@Component({
  selector: 'app-showtime-title',
  templateUrl: './showtime-title.component.html',
  styleUrls: ['./showtime-title.component.scss']
})
export class ShowtimeTitleComponent implements OnInit {
  @Input() id: string;

  private title: IMovie;
  private groups: IGroup[];
  private nTheater = 0;
  private selectedDate: string;

  constructor(private router: Router, private service: ShowtimesService, private route: ActivatedRoute) {
    this.route.url.subscribe(url => { this.loadShowtimes(); });
  }

  ngOnInit() {
    this.loadShowtimes();
  }

  loadShowtimes() {
    this.route.params.subscribe((params: Params) => { this.selectedDate = params['date']; });
    if (this.selectedDate === undefined) {
      this.selectedDate = moment().format("YYYY-MM-DD");
    }


    this.route.params.subscribe((params: Params) => { this.id = params['id']; });
    ///fixxxx
    const location: ILocation = {
      postcode: '3030',
      country: 'AU'
    }
    this.service.getShowtimesTitle(location, this.selectedDate, this.id).subscribe((data) => {
      this.title = data.item;
      this.groups = data.items;
      data.items.forEach(element => {
        this.nTheater += element.items.length;
      });
    });
  }

  onDateChange(date: Date) {
    this.selectedDate = moment(date).format("YYYY-MM-DD");
  }

}
