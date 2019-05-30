import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-refine',
  templateUrl: './photo-refine.component.html',
  styleUrls: ['./photo-refine.component.scss']
})
export class PhotoRefineComponent implements OnInit {
  @Input() data: IPhoto;

  constructor() { }

  ngOnInit() {
  }

}
