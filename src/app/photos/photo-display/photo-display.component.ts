import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPhoto } from 'src/app/models/photo';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.scss']
})
export class PhotoDisplayComponent implements OnInit {
  @Input() data: IPhoto;
  @Input() type: string;
  @Input() isVideoGallery: boolean;
  @Output() sortChange = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSortChange(sortBy: string) {
    this.sortChange.emit(sortBy);
  }

}

