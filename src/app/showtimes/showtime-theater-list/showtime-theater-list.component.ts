import { Component, OnInit, Input } from '@angular/core';
import { IGroup } from 'src/app/models/showtimes';

@Component({
  selector: 'app-showtime-theater-list',
  templateUrl: './showtime-theater-list.component.html',
  styleUrls: ['./showtime-theater-list.component.scss']
})
export class ShowtimeTheaterListComponent implements OnInit {
  @Input() data: IGroup[];
  @Input() nTheater: number;
  @Input() today: string;

  constructor() { }

  ngOnInit() {

  }

}
