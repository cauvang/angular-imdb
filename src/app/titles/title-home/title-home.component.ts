import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TitlesService } from 'src/app/services/titles.service';
import { ITitle } from 'src/app/models/title';
import { ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-title-home',
  templateUrl: './title-home.component.html',
  styleUrls: ['./title-home.component.scss']
})

export class TitleHomeComponent implements OnInit {
  public toggleMegaMenu = false;
  private id: string;
  private data: ITitle;
  private caption: {
    videoCounts: number,
    imageCounts: number,
    length: number
  };
  private today: string;
  private similarTitles: ITitle[];
  private selectedTitle: ITitle;
  private PrevDisabled: boolean;

  constructor(private service: TitlesService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => { this.id = params['id']; });
    this.today = moment().format("YYYY-MM-DD");
    this.PrevDisabled = true;
  }

  ngOnInit() {
    this.service.getTitle(this.id).subscribe(data => {
      this.data = data;
      this.caption = {
        videoCounts: data.videoCounts,
        imageCounts: data.imageCounts,
        length: 1.06
      };
      this.similarTitles = data.similarTitles.slice(0, 6);
      this.selectedTitle = this.similarTitles[0];
    });
  }

  toggleMenuClick() {
    this.toggleMegaMenu = !this.toggleMegaMenu;
  }

  onPrevPag() {
    this.PrevDisabled = true;
    this.similarTitles = this.data.similarTitles.slice(0, 6);
    this.selectedTitle = this.similarTitles[0];

  }

  onNextPag() {
    this.PrevDisabled = false;
    this.similarTitles = this.data.similarTitles.slice(6, 12);
    this.selectedTitle = this.similarTitles[0];

  }

  onMouseOver(item: ITitle) {
    this.selectedTitle = item;
  }

  onNext() {
    const ind = this.similarTitles.indexOf(this.selectedTitle);
    if (ind < 5)
      this.selectedTitle = this.similarTitles[ind + 1];
    else {
      if (this.PrevDisabled) {
        this.onNextPag();
      }
    }
  }
}
