import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDetailList } from 'src/app/models/title';
import { TitlesService } from 'src/app/services/titles.service';

@Component({
  selector: 'app-title-storyline-keywords',
  templateUrl: './title-storyline-keywords.component.html',
  styleUrls: ['./title-storyline-keywords.component.scss']
})
export class TitleStorylineKeywordsComponent implements OnInit {

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

  onSortChange(sortBy: string) {
    console.log("ss", sortBy)

    // //alpha,desc
    // this.data.sort(x.items=>x.name)

    // this.selectedMenu = this.data.find(x => {
    //   return x.items.some(
    //     item => item.url.includes(this.titleType))

  }

}
