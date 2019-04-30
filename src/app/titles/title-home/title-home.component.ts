import { Component, OnInit } from '@angular/core';
import { TitlesService } from 'src/app/services/titles.service';
import { ITitle } from 'src/app/models/title';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-title-home',
  templateUrl: './title-home.component.html',
  styleUrls: ['./title-home.component.scss']
})

export class TitleHomeComponent implements OnInit {
  public toggleMegaMenu = false;
  private id: string;
  private data: ITitle;
  private caption: {
    videoCounts: string,
    imageCounts: string,
    length: number
  };

  constructor(private service: TitlesService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => { this.id = params['id']; });

  }

  ngOnInit() {
    this.service.getTitle(this.id).subscribe(data => {
      //console.log(data);
      this.data = data;
      this.caption = {
        videoCounts: data.videoCounts,
        imageCounts: data.imageCounts,
        length: 10.06
      };
    });
  }

  toggleMenuClick() {
    this.toggleMegaMenu = !this.toggleMegaMenu;
  }
}
