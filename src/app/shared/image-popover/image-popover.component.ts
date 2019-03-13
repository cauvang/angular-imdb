import { Component, OnInit, Input } from '@angular/core';
import { IShowtimeMovie } from 'src/app/models/showtimes';

@Component({
  selector: 'app-image-popover',
  templateUrl: './image-popover.component.html',
  styleUrls: ['./image-popover.component.scss']
})
export class ImagePopoverComponent implements OnInit {
  @Input() data: IShowtimeMovie;

  constructor() { }

  ngOnInit() {
  }

}
