import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PhotoService } from 'src/app/services/photo.service';
import { IPhoto } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-home',
  templateUrl: './photo-home.component.html',
  styleUrls: ['./photo-home.component.scss']
})
export class PhotoHomeComponent implements OnInit {
  private data: IPhoto;
  private id: string;
  private queryParams: any;

  constructor(private route: ActivatedRoute, private service: PhotoService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.route.queryParams.subscribe(queryParams => {
      this.queryParams = queryParams;

      this.service.getPhotos(this.id, this.queryParams).subscribe(data => {
        this.data = data;
      });
    });
  }
}
