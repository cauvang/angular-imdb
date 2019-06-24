import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/services/name.service';
import { IName } from 'src/app/models/name';
import { ActivatedRoute, Params } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-name-home',
  templateUrl: './name-home.component.html',
  styleUrls: ['./name-home.component.scss']
})
export class NameHomeComponent implements OnInit {
  private data: IName;
  private id: string;
  private caption: {};

  private bornOn: string;
  private bornOnYear: string;

  private birthdayQueryParams: {
    birth_monthday: string;
    refine: string;
  };
  private yearQueryParams: {
    birth_year: string;
  };

  private bShow: boolean;

  private fbUrl: string;
  private twitterUrl: string;

  constructor(private service: NameService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => { this.id = params['id']; });
    //  this.bShow = false;
  }

  ngOnInit() {
    this.service.getName(this.id).subscribe(data => {
      this.data = data;
      this.fbUrl = "http://www.imdb.com/name/" + this.id;
      this.twitterUrl = data.name + "-https://www.imdb.com/name/" + this.id;


      this.caption = {
        length: data.heroVideo.caption,
        videoCounts: data.totalVideos,
        imageCounts: data.totalImages
      };
      let birthday = data.bornOn.split('-');
      birthday[1] = (+birthday[1] - 1).toString();//month
      this.birthdayQueryParams = {
        birth_monthday: moment(birthday).format('MM-DD'),
        refine: 'birth_monthday'
      };
      this.bornOn = moment(birthday).format('MMMM D');
      this.yearQueryParams = {
        birth_year: birthday[0]
      };
      this.bornOnYear = birthday[0];
    });
  }



}
