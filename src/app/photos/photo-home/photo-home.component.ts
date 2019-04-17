import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PhotoService } from 'src/app/services/photo.service';
import { IPhoto, IGallery } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-home',
  templateUrl: './photo-home.component.html',
  styleUrls: ['./photo-home.component.scss']
})
export class PhotoHomeComponent implements OnInit {
  private data: IPhoto;
  private id: string;
  private header: string;
  private pages: number[];
  private currentPage: number;

  constructor(private route: ActivatedRoute, private service: PhotoService, private router: Router) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.header = this.getHeader(this.id);
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      console.log("queryParams", queryParams);
      this.currentPage = queryParams["page"];
      this.loadData();
    });


  }

  private loadData() {
    this.service.getPhotos(this.id, this.currentPage).subscribe(data => {
      this.data = data;

      const pageList = [];

      for (let i = 1; i <= data.totalPages; i++)
        pageList.push(i);

      this.pages = pageList;
    });
  }

  private getHeader(id: string) {
    if (id === "rg1859820288")
      return "Latest Stills";
    if (id === "rg1624939264")
      return "Latest Posters";
    if (id === "rg1641716480")
      return "Photos We Love";
  }
}
