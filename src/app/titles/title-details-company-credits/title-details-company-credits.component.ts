import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IDetailList } from 'src/app/models/title';
import { TitlesService } from 'src/app/services/titles.service';

@Component({
  selector: 'app-title-details-company-credits',
  templateUrl: './title-details-company-credits.component.html',
  styleUrls: ['./title-details-company-credits.component.scss']
})
export class TitleDetailsCompanyCreditsComponent implements OnInit {

  private data: IDetailList[];
  private id: string;
  private nTotal: number = 0;

  constructor(private service: TitlesService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];
  }

  ngOnInit() {
    this.service.getTitleDetail(this.id, 'companycredits').subscribe(data => {
      this.data = data.items;
      data.items.forEach(element => {
        this.nTotal += element.items.length;
      });
    });
  }
}
