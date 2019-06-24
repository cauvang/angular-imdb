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

  private fbUrl: string;
  private twitterUrl: string;

  constructor(private router: Router, private service: TitlesService, private route: ActivatedRoute) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];

    this.route.queryParams.subscribe(queryParams => {
      this.queryParams = queryParams;
      this.loadData();

    });


  }

  ngOnInit() { }

  loadData() {
    const url = document.location.href;
    let queryString = '';
    if (url.indexOf('?')) {
      queryString = url.split('?')[1];
    }
    this.service.getTitlePhoto(this.id, "mediaindex", queryString).subscribe(data => {
      this.data = data;
      this.fbUrl = "http://www.imdb.com/title/" + this.id;
      this.twitterUrl = data.item.name + data.item.year + "-https://www.imdb.com/title/" + this.id;
    });
  }
}


