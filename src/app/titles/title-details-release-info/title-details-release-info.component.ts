import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IDetailList } from 'src/app/models/title';
import { TitlesService } from 'src/app/services/titles.service';

@Component({
  selector: 'app-title-details-release-info',
  templateUrl: './title-details-release-info.component.html',
  styleUrls: ['./title-details-release-info.component.scss']
})
export class TitleDetailsReleaseinfoComponent implements OnInit {

  private data: IDetailList[];
  private id: string;
  private nTotal = 0;

  constructor(private service: TitlesService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];
  }

  ngOnInit() {
    this.service.getTitleDetail(this.id, 'releaseinfo').subscribe(data => {
      this.data = data.items;
      data.items.forEach(element => { this.nTotal += element.items.length; });
    });
  }

}
