import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NameService } from 'src/app/services/name.service';
import { IPhoto } from 'src/app/models/photo';

@Component({
  selector: 'app-name-photo-video-gallery',
  templateUrl: './name-photo-video-gallery.component.html',
  styleUrls: ['./name-photo-video-gallery.component.scss']
})
export class NamePhotoVideoGalleryComponent implements OnInit {

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

  ngOnInit() {
  }

  loadData() {
    const url = document.location.href;
    let queryString = '';
    if (url.indexOf('?')) {
      queryString = url.split('?')[1];
    }

    this.service.getNamePhoto(this.id, "videogallery", queryString).subscribe(data => {
      this.data = data;
      this.fbUrl = "http://www.imdb.com/name/" + this.id;
      this.twitterUrl = data.item.name + data.item.year + "-https://www.imdb.com/name/" + this.id;
    });
  }

  onSortChange(sortBy) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: sortBy,
        queryParamsHandling: 'merge'
      });
  }

}
