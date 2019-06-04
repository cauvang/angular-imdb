import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/models/photo';
import { Router, ActivatedRoute } from '@angular/router';
import { TitlesService } from 'src/app/services/titles.service';

@Component({
  selector: 'app-title-photo-video-videos',
  templateUrl: './title-photo-video-videos.component.html',
  styleUrls: ['./title-photo-video-videos.component.scss']
})
export class TitlePhotoVideoVideosComponent implements OnInit {
  private id: string;
  private data: IPhoto;
  private queryParams: any;

  constructor(private router: Router, private service: TitlesService, private route: ActivatedRoute) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];

    this.route.queryParams.subscribe(queryParams => {
      this.queryParams = queryParams;
      this.service.getTitlePhoto(this.id, "videogallery", this.queryParams).subscribe(data => {
        this.data = data;
      });
    });
  }

  ngOnInit() {
  }

}
