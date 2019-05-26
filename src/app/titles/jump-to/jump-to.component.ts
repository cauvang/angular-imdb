import { Component, OnInit, Input } from '@angular/core';
import { IDetailList } from 'src/app/models/title';

@Component({
  selector: 'app-jump-to',
  templateUrl: './jump-to.component.html',
  styleUrls: ['./jump-to.component.scss']
})
export class JumpToComponent implements OnInit {
  @Input() nTotal: number;
  @Input() data: IDetailList[];
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
