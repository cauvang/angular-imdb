import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movies';

@Component({
  selector: 'app-showtime-theater-item',
  templateUrl: './showtime-theater-item.component.html',
  styleUrls: ['./showtime-theater-item.component.scss']
})
export class ShowtimeTheaterItemComponent implements OnInit {
  @Input() data: IMovie;

  constructor() { }

  ngOnInit() {
  }

}
