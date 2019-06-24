import { Component, OnInit, Input } from '@angular/core';
import { INameDetail } from 'src/app/models/name';

@Component({
  selector: 'app-name-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() data: INameDetail;

  constructor() { }

  ngOnInit() {
  }

}
