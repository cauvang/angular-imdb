import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TitlesService } from 'src/app/services/titles.service';
import { IPhoto } from 'src/app/models/photo';

@Component({
  selector: 'app-title-photo-video-photos',
  templateUrl: './title-photo-video-photos.component.html',
  styleUrls: ['./title-photo-video-photos.component.scss']
})
export class TitlePhotoVideoPhotosComponent implements OnInit {

  private id: string;
  private data: IPhoto;
  private queryParams: any;

  constructor(private router: Router, private service: TitlesService, private route: ActivatedRoute) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];

    // this.route.url.subscribe(url => {
    //   this.loadData();
    //   console.log("home", this.data, url)
    // });

    // this.route.params.subscribe((params: Params) => {
    //   this.id = params['id'];
    //   this.loadData();

    // });

    this.route.queryParams.subscribe(queryParams => {
      this.queryParams = queryParams;
      this.loadData();

    });


  }

  ngOnInit() { }

  loadData() {
    this.service.getTitlePhoto(this.id, "mediaindex", this.queryParams).subscribe(data => {
      this.data = data;
    });
  }
}


