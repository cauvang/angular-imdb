import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/models/title';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() data: IUser[];
  @Input() id: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
