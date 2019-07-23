import { Component, OnInit, Input } from '@angular/core';
import { ITitleDetail } from 'src/app/models/title';
import { IType } from 'src/app/models/photo';

@Component({
  selector: 'app-title-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() data: ITitleDetail;
  @Input() currentFilter: string;
  @Input() type: string;
  @Input() currentFilters: IType[];

  constructor() { }

  ngOnInit() {
  }

}
