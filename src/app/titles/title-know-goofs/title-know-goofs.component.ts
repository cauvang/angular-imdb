import { Component, OnInit } from '@angular/core';
import { IDetailList } from 'src/app/models/title';
import { TitlesService } from 'src/app/services/titles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-know-goofs',
  templateUrl: './title-know-goofs.component.html',
  styleUrls: ['./title-know-goofs.component.scss']
})
export class TitleKnowGoofsComponent implements OnInit {

  private data: IDetailList[];
  private id: string;
  private nTotal = 0;

  constructor(private service: TitlesService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];
  }

  ngOnInit() {
    this.service.getTitleDetail(this.id, 'goofs').subscribe(data => {
      this.data = data.items;
      data.items.forEach(element => { this.nTotal += element.items.length; });
    });
  }

}
