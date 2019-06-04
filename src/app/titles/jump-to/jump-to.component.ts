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

  ngOnInit() {
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.lo g("aa", this.data)
    // this.nTotal += this.data.length;

    this.data.forEach(element => {
      if (element.items != undefined)
        this.nTotal += element.items.length;

    });
  }
}
