import { Component, OnInit } from '@angular/core';
import { IDetailList } from 'src/app/models/title';
import { TitlesService } from 'src/app/services/titles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-details-external-sites',
  templateUrl: './title-details-external-sites.component.html',
  styleUrls: ['./title-details-external-sites.component.scss']
})
export class TitleDetailsExternalSitesComponent implements OnInit {

  private data: IDetailList[];
  private id: string;

  constructor(private service: TitlesService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];
    console.log("bb");
    this.service.getTitleDetail(this.id, 'externalsites').subscribe(data => {
      console.log("m")
      this.data = data.items;
    });
  }

  ngOnInit() {

  }

}
