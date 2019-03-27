import { Component, OnInit, Input } from '@angular/core';
import { IGetShowtimeTheaterResponse, IGroup } from 'src/app/models/showtimes';

@Component({
  selector: 'app-showtime-theater-input',
  templateUrl: './showtime-theater-input.component.html',
  styleUrls: ['./showtime-theater-input.component.scss']
})
export class ShowtimeTheaterInputComponent implements OnInit {
  @Input() data: IGroup[];
  @Input() nTheater: number;
  @Input() today: string;

  constructor() { }

  ngOnInit() {

  }

}
