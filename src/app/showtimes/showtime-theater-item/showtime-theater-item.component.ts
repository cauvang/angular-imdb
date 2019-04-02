import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movies';
import { OverlayStyles } from 'src/app/models/enums';

@Component({
  selector: 'app-showtime-theater-item',
  templateUrl: './showtime-theater-item.component.html',
  styleUrls: ['./showtime-theater-item.component.scss']
})
export class ShowtimeTheaterItemComponent implements OnInit {
  @Input() data: IMovie;
  @Input() overlayStyle: OverlayStyles;
  @Input() iconUrl: string;
  constructor() { }

  ngOnInit() {
    console.log(this.iconUrl);
  }
  getClass() {
    return {
      large: true
    }
  }
}
