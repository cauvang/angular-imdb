import { Component, OnInit, Input } from '@angular/core';
import { IDetail } from 'src/app/models/title';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.scss']
})
export class CastsComponent implements OnInit {
  @Input() data: IDetail[];

  constructor() { }

  ngOnInit() {
  }

}
