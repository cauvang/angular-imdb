import { Component, OnInit, Input } from '@angular/core';
import { ITitleDetail } from 'src/app/models/title';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  @Input() data: ITitleDetail;

  constructor() { }

  ngOnInit() {
  }

}
