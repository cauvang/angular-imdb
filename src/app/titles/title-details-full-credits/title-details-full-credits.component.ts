import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ITitleType } from 'src/app/models/title';
import { TitlesService } from 'src/app/services/titles.service';

@Component({
  selector: 'app-title-details-full-credits',
  templateUrl: './title-details-full-credits.component.html',
  styleUrls: ['./title-details-full-credits.component.scss']
})
export class TitleDetailsFullCreditsComponent implements OnInit {
  private data: ITitleType;
  private id: string;


  constructor(private service: TitlesService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];
  }

  ngOnInit() {
    this.service.getTitleDetail(this.id, 'fullcredits').subscribe(data => {
      this.data = data;
    });
  }

  isCast(item: string) {
    return item.includes("Cast");
  }
}
