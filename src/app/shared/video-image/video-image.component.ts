import { Component, OnInit, Input } from '@angular/core';
import { IImage } from 'src/app/models/article';

@Component({
  selector: 'app-video-image',
  templateUrl: './video-image.component.html',
  styleUrls: ['./video-image.component.scss']
})
export class VideoImageComponent implements OnInit {
  private imgVideo = "https://m.media-amazon.com/images/G/01/IMDb/icon/play-button._CB318667375_.png";
  private imgHover = "https://m.media-amazon.com/images/G/01/IMDb/icon/play-button-hover._CB318667374_.png";
  private playIcon;
  @Input() image: IImage;

  constructor() {
    this.playIcon = this.imgVideo;
  }

  ngOnInit() {
  }

  onMouseOver() {
    this.playIcon = this.imgHover;
  }
  onMouseOut() {
    this.playIcon = this.imgVideo;
  }
}
