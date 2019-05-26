import { Component, OnInit, Input } from '@angular/core';
import { ITitleDetail } from 'src/app/models/title';

@Component({
  selector: 'app-title-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() data: ITitleDetail;

  constructor() { }

  ngOnInit() {
  }

}
