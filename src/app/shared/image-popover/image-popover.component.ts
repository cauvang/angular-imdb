import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movies';

@Component({
  selector: 'app-image-popover',
  templateUrl: './image-popover.component.html',
  styleUrls: ['./image-popover.component.scss']
})
export class ImagePopoverComponent implements OnInit {
  @Input() data: IMovie;

  constructor() { }

  ngOnInit() {
  }

}
