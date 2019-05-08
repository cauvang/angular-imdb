import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-string-display',
  templateUrl: './string-display.component.html',
  styleUrls: ['./string-display.component.scss']
})
export class StringDisplayComponent implements OnInit {
  @Input() title: string;
  @Input() data: string[];
  @Input() param: string;
  @Input() routerLink: string;
  @Input() splitType: string;
  @Input() stringName: string;

  constructor() { }

  ngOnInit() {
  }



  getParam(item: string) {
    const heodau = {};
    heodau[this.param] = item.replace(' ', '-').toLowerCase();
    return heodau;
  }

}
