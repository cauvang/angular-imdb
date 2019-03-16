import { Component, OnInit, Input } from '@angular/core';
import { IMetadata } from 'src/app/models/showtimes';

@Component({
  selector: 'app-refinement',
  templateUrl: './refinement.component.html',
  styleUrls: ['./refinement.component.scss']
})
export class RefinementComponent implements OnInit {
  @Input() data: IMetadata[];
  constructor() { }

  ngOnInit() {
  }

}
