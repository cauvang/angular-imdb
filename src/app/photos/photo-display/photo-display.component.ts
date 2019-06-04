import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.scss']
})
export class PhotoDisplayComponent implements OnInit {
  @Input() data: IPhoto;
  @Input() id: string;
  @Input() queryParams: any;
  @Input() type: string;
  @Input() isVideoGallery: boolean;

  constructor() { }

  ngOnInit() {
  }

}

