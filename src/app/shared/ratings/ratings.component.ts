import { Component, OnInit, Input } from '@angular/core';
import { RatingModule } from "ngx-rating";

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  @Input() starsCount: number;

  constructor() {

  }

  ngOnInit() {
  }

}
