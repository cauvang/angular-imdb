import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/models/title';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: IUser[];
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
