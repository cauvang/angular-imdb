import { Component, OnInit } from '@angular/core';
import { IDetailList } from 'src/app/models/title';
import { TitlesService } from 'src/app/services/titles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-details-technical',
  templateUrl: './title-details-technical.component.html',
  styleUrls: ['./title-details-technical.component.scss']
})
export class TitleDetailsTechnicalComponent implements OnInit {
  private data: IDetailList[];
  private id: string;

  constructor(private service: TitlesService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];
  }

  ngOnInit() {
    this.service.getTitleDetail(this.id, 'technical').subscribe(data => {
      this.data = data.items;
    });
  }

}
