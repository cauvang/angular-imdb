import { Component, OnInit, Input } from '@angular/core';
import { OverlayStyles } from 'src/app/models/enums';

@Component({
  selector: 'app-overlay-image',
  templateUrl: './overlay-image.component.html',
  styleUrls: ['./overlay-image.component.scss']
})
export class OverlayImageComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() imageTitle: string;
  @Input() overlayStyle: OverlayStyles;
  @Input() iconUrl: string;

  constructor() {
    this.overlayStyle = OverlayStyles.bottomIcon;
  }

  ngOnInit() {
    // this.overlayStyle = OverlayStyles.bottomIcon;
  }

}
