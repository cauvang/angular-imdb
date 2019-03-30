import { Component, OnInit, Input } from '@angular/core';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IMovie } from 'src/app/models/movies';
import { IGroup, ILocation } from 'src/app/models/showtimes';
import { GetDateService } from 'src/app/services/getDate.service';

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
  private today: string;

  constructor(private router: Router, private service: ShowtimesService, private route: ActivatedRoute, private dateService: GetDateService) {
    this.route.url.subscribe(url => {
      this.loadShowtimes();
    });
  }

  ngOnInit() {
    // this.route.url.subscribe(url => {
    //   const tmp = this.router.routerState.snapshot.url.split('/');
    //   this.type = tmp[2];
    //   console.log("type", this.type)
    // });
    this.loadShowtimes();
  }

  loadShowtimes() {

    this.route.params.subscribe((params: Params) => { this.today = params['date']; });
    if (this.today === undefined) {
      this.today = this.dateService.GetToday_YYYYMMDD();
    }


    this.route.params.subscribe((params: Params) => { this.id = params['id']; });
    ///fixxxx
    const location: ILocation = {
      postcode: '3030',
      country: 'AU'
    }
    this.service.getShowtimesTitle(location, this.today, this.id).subscribe((data) => {
      this.title = data.item;
      this.groups = data.items;
      data.items.forEach(element => {
        this.nTheater += element.items.length;
      });
    });
  }


}
