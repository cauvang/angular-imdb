import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitlesService } from 'src/app/services/titles.service';
import { IDetailList } from 'src/app/models/title';

@Component({
  selector: 'app-title-trivia',
  templateUrl: './title-trivia.component.html',
  styleUrls: ['./title-trivia.component.scss']
})
export class TitleTriviaComponent implements OnInit {
  private id: string;
  private data: IDetailList[];
  private nTotal: number = 0;

  constructor(private router: Router, private service: TitlesService) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];

  }

  ngOnInit() {
    this.service.getTitleDetail(this.id, 'trivia').subscribe(data => {
      this.data = data.items;
      data.items.forEach(element => {
        this.nTotal += element.items.length;

      });
    });
  }

}
