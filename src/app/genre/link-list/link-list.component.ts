import { Component, OnInit, Input } from '@angular/core';
import { ILink } from 'src/app/models/chart';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {
  @Input() header: string;
  @Input() data: ILink[];
  @Input() columnNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
