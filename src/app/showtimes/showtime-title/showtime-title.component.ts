import { Component, OnInit, Input } from '@angular/core';
import { ShowtimesService } from 'src/app/services/showtimes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IMovie } from 'src/app/models/movies';
import { IGroup } from 'src/app/models/showtimes';

@Component({
  selector: 'app-showtime-title',
  templateUrl: './showtime-title.component.html',
  styleUrls: ['./showtime-title.component.scss']
})
export class ShowtimeTitleComponent implements OnInit {
  @Input() id: string;
  private title: IMovie;
  private groups: IGroup[];

  constructor(private service: ShowtimesService, private route: ActivatedRoute) {
    this.route.url.subscribe(url => {
      this.loadShowtimes();
    });
  }

  ngOnInit() {
    this.loadShowtimes();
  }

  loadShowtimes() {
    this.route.params.subscribe((params: Params) => { this.id = params['id']; });
    this.service.getShowtimesTitle(this.id).subscribe((data) => {
      this.title = data.item;
      this.groups = data.items;

    });
  }


}
