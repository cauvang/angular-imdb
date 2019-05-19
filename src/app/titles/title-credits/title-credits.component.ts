import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ITitleDetail, IDetailList } from 'src/app/models/title';
import { TitlesService } from 'src/app/services/titles.service';

@Component({
  selector: 'app-title-credits',
  templateUrl: './title-credits.component.html',
  styleUrls: ['./title-credits.component.scss']
})
export class TitleCreditsComponent implements OnInit {
  private data: IDetailList[];
  private id: string;


  constructor(private service: TitlesService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];
  }

  ngOnInit() {
    this.service.getTitle_FullCredits(this.id).subscribe(data => {
      this.data = data.items;
    });
  }

  isCast(item: string) {
    return item.includes("Cast");
  }
}
