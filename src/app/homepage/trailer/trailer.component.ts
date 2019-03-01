import { Component, OnInit, Input } from '@angular/core';
import { ITrailer } from 'src/app/models/trailer';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  @Input() data: ITrailer[];
  constructor() { }

  ngOnInit() {

  }

}
