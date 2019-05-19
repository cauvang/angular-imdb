import { Component, OnInit, Input } from '@angular/core';
import { IMenu } from 'src/app/models/title';

@Component({
  selector: 'app-see-also',
  templateUrl: './see-also.component.html',
  styleUrls: ['./see-also.component.scss']
})
export class SeeAlsoComponent implements OnInit {
  @Input() data: IMenu[];


  constructor() { }

  ngOnInit() {
  }

}
