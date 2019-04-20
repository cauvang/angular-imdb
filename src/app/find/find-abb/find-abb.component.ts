import { Component, OnInit, Input } from '@angular/core';
import { IResultResponse } from 'src/app/models/find';

@Component({
  selector: 'app-find-abb',
  templateUrl: './find-abb.component.html',
  styleUrls: ['./find-abb.component.scss']
})
export class FindAbbComponent implements OnInit {
  @Input() result: IResultResponse;
  @Input() displayAll: boolean;

  constructor() { }

  ngOnInit() {
  }

}
