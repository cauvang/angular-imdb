import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from 'src/app/models/photo';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-refine',
  templateUrl: './photo-refine.component.html',
  styleUrls: ['./photo-refine.component.scss']
})
export class PhotoRefineComponent implements OnInit {
  @Input() data: IPhoto;
  private url: string;

  constructor(private router: Router) {
    this.url = this.router.routerState.snapshot.url;
  }

  ngOnInit() {
  }

}
