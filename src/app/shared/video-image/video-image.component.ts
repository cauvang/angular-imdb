import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-image',
  templateUrl: './video-image.component.html',
  styleUrls: ['./video-image.component.scss']
})
export class VideoImageComponent implements OnInit {
  private iconVideo = 'https://m.media-amazon.com/images/G/01/IMDb/icon/play-button._CB318667375_.png';
  private iconHover = 'https://m.media-amazon.com/images/G/01/IMDb/icon/play-button-hover._CB318667374_.png';
  private playIcon;

  @Input() imageUrl: string;
  @Input() imageTitle: string;
  @Input() caption: {};// = "85 VIDEOS";
  // @Input() imageCounts = "441 IMAGES";

  constructor() {
    this.playIcon = this.iconVideo;
  }

  ngOnInit() {
  }

  onMouseOver() {
    this.playIcon = this.iconHover;
  }
  onMouseOut() {
    this.playIcon = this.iconVideo;
  }
}
