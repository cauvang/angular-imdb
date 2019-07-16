import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/models/photo';
import { Router, ActivatedRoute } from '@angular/router';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-name-photo-media-index',
  templateUrl: './name-photo-media-index.component.html',
  styleUrls: ['./name-photo-media-index.component.scss']
})
export class NamePhotoMediaIndexComponent implements OnInit {

  private id: string;
  private data: IPhoto;
  private queryParams: any;

  private fbUrl: string;
  private twitterUrl: string;

  constructor(private router: Router, private service: NameService, private route: ActivatedRoute) {
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
    this.service.getNamePhoto(this.id, "mediaindex", queryString).subscribe(data => {
      this.data = data;
      this.fbUrl = "http://www.imdb.com/name/" + this.id;
      this.twitterUrl = data.item.name + data.item.year + "-https://www.imdb.com/name/" + this.id;
    });
  }

}
