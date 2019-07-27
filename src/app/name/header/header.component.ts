import { Component, OnInit, Input } from '@angular/core';
import { INameDetail } from 'src/app/models/name';
import { IType } from 'src/app/models/photo';

@Component({
  selector: 'app-name-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() data: INameDetail;
  @Input() currentFilter: string;
  @Input() currentFilters: IType[];
  @Input() type: string;

  constructor() { }

  ngOnInit() {
    console.log(this.type, this.currentFilters)
  }

}
