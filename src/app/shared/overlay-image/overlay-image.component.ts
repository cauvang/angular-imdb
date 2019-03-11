import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overlay-image',
  templateUrl: './overlay-image.component.html',
  styleUrls: ['./overlay-image.component.scss']
})
export class OverlayImageComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() imageTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
