import { Component, OnInit, Input } from '@angular/core';
import { IDetailList } from 'src/app/models/title';

@Component({
  selector: 'app-jump-to',
  templateUrl: './jump-to.component.html',
  styleUrls: ['./jump-to.component.scss']
})
export class JumpToComponent implements OnInit {
  @Input() data: IDetailList[];
  @Input() url: string;

  private nTotal = 0;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(): void {

    this.data.forEach(element => {
      if (element.items != undefined)
        this.nTotal += element.items.length;

    });
  }
}
