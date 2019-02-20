import { Component, OnInit, Input } from '@angular/core';
import { ITrailer } from 'src/app/models/trailer';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {
  @Input() data: ITrailer[];
  constructor() { }

  ngOnInit() {
    console.log("title", this.data);
  }

}
