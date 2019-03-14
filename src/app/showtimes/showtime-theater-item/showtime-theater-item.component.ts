import { Component, OnInit, Input } from '@angular/core';
import { IMovies } from 'src/app/models/showtimes';

@Component({
  selector: 'app-showtime-theater-item',
  templateUrl: './showtime-theater-item.component.html',
  styleUrls: ['./showtime-theater-item.component.scss']
})
export class ShowtimeTheaterItemComponent implements OnInit {
  @Input() data: IMovies;

  constructor() { }

  ngOnInit() {
  }

}
