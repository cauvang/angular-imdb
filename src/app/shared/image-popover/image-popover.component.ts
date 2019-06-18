import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movies';


@Component({
  selector: 'app-image-popover',
  templateUrl: './image-popover.component.html',
  styleUrls: ['./image-popover.component.scss']
})
export class ImagePopoverComponent implements OnInit {
  @Input() data: IMovie;
  private url: string;

  constructor() { }

  ngOnInit() {
    if (this.data.rank)
      this.url = "/showtimes/title/" + this.data.id;
    else
      this.url = "/title/" + this.data.id;

  }

}
