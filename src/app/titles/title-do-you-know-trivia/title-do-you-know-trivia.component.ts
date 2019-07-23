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
  private url: string;

  constructor(private router: Router, private service: TitlesService) {
    this.url = this.router.routerState.snapshot.url;
    console.log("trivia url", this.url)
    const urls = this.url.split('/');
    this.id = urls[2];
    const type = urls[3];
    if (type.includes("?"))
      this.titleType = type.split("?")[0];
    else {
      if (type.includes("#"))
        this.titleType = type.split("#")[0];
      else
        this.titleType = type;
    }

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
