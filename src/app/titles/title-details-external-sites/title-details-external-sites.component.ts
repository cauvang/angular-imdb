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
  private nTotal = 0;

  constructor(private service: TitlesService, private router: Router) {
    console.log("eewfw");
    this.id = this.router.routerState.snapshot.url.split('/')[2];
    console.log("dee", this.id)

    this.service.getTitleDetail(this.id, 'externalsites').subscribe(data => {
      this.data = data.items;
      data.items.forEach(element => { this.nTotal += element.items.length; });
      console.log("d", this.data)
    });
  }

  ngOnInit() {

  }

}
