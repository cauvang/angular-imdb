import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TitlesService } from 'src/app/services/titles.service';
import { ITitleType } from 'src/app/models/title';

@Component({
  selector: 'app-title-homepage',
  templateUrl: './title-homepage.component.html',
  styleUrls: ['./title-homepage.component.scss']
})
export class TitleHomepageComponent implements OnInit {
  private isTitleHome = true;
  private id: string;
  private data: ITitleType;

  private titleType: string;

  constructor(private service: TitlesService, private route: ActivatedRoute, private router: Router, ) {
    this.route.url.subscribe(url => {
      const urls = router.routerState.snapshot.url.split("/");
      this.isTitleHome = urls.length === 3;
      this.id = urls[2];
      if (!this.isTitleHome) {
        this.titleType = urls[3].split('#')[0];
        if (this.titleType === "officialsites")
          this.titleType = "externalsites";
        // this.titleType === "officialsites" ? "externalsites" : this.titleType;
        // console.log(this.titleType)
        this.service.getTitleDetail(this.id, this.titleType).subscribe(data => {
          this.data = data;
        });
      }

    });
  }

  ngOnInit() { }

}
