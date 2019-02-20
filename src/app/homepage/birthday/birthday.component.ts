import { Component, OnInit, Input } from '@angular/core';
import { IBirthday } from 'src/app/models/birthday';
import { IImage } from 'src/app/models/article';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {
  @Input() data: IBirthday[];
  @Input() name: string;
  @Input() id: string;
  @Input() description: string;
  @Input() image: IImage;

  constructor() { }

  ngOnInit() {
  }

}
