import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TitlesService } from 'src/app/services/titles.service';
import { IDetailList } from 'src/app/models/title';

@Component({
  selector: 'app-title-do-you-know-trivia',
  templateUrl: './title-do-you-know-trivia.component.html',
  styleUrls: ['./title-do-you-know-trivia.component.scss']
})
export class TitleDoYouKnowTriviaComponent implements OnInit {
  private id: string;
  private data: IDetailList[];
  private titleType: string;
  private isHTML = false;

  constructor(private router: Router, private service: TitlesService) {
    const urls = this.router.routerState.snapshot.url.split('/');
    this.id = urls[2];
    this.titleType = urls[3];
    switch (this.titleType) {
      case "quotes":
      case "crazycredits":
      case "soundtrack":
        this.isHTML = true;
        break;
      default:
        this.isHTML = false;
        break;
    }
  }

  ngOnInit() {
    this.service.getTitleDetail(this.id, this.titleType).subscribe(data => {
      this.data = data.items;
    });
  }

}
