import { Component, OnInit } from '@angular/core';
import { IDetailList } from 'src/app/models/title';
import { Router } from '@angular/router';
import { TitlesService } from 'src/app/services/titles.service';

@Component({
  selector: 'app-title-do-you-know-versions',
  templateUrl: './title-do-you-know-versions.component.html',
  styleUrls: ['./title-do-you-know-versions.component.scss']
})
export class TitleDoYouKnowVersionsComponent implements OnInit {

  private id: string;
  private data: IDetailList[];
  private titleType: string;

  constructor(private router: Router, private service: TitlesService) {
    const urls = this.router.routerState.snapshot.url.split('/');
    this.id = urls[2];
    this.titleType = urls[3];
  }

  ngOnInit() {
    this.service.getTitleDetail(this.id, this.titleType).subscribe(data => {
      this.data = data.items;
    });
  }
}
