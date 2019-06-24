import { Component, OnInit, Input } from '@angular/core';
import { ITitleDetail } from 'src/app/models/title';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.scss']
})
export class SharePageComponent implements OnInit {
  @Input() fbUrl: string;
  @Input() twitterUrl: string;

  constructor() { }

  ngOnInit() {

  }

}
