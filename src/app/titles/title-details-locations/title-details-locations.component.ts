import { Component, OnInit } from '@angular/core';
import { IDetailList } from 'src/app/models/title';
import { TitlesService } from 'src/app/services/titles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-details-locations',
  templateUrl: './title-details-locations.component.html',
  styleUrls: ['./title-details-locations.component.scss']
})
export class TitleDetailsLocationsComponent implements OnInit {

  private data: IDetailList[];
  private id: string;
  private nTotal = 0;

  constructor(private service: TitlesService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];
  }

  ngOnInit() {
    this.service.getTitleDetail(this.id, 'locations').subscribe(data => {
      this.data = data.items;
      data.items.forEach(element => { this.nTotal += element.items.length; });

    });
  }

}
