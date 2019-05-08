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

  constructor(private service: TitlesService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => { this.id = params['id']; });
    this.today = moment().format("YYYY-MM-DD");
  }

  ngOnInit() {
    this.service.getTitle(this.id).subscribe(data => {
      this.data = data;
      this.caption = {
        videoCounts: data.videoCounts,
        imageCounts: data.imageCounts,
        length: 1.06
      };

    });
  }

  toggleMenuClick() {
    this.toggleMegaMenu = !this.toggleMegaMenu;
  }
}
