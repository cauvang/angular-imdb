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
  private fbUrl: string;
  private twitterUrl: string;

  constructor(private service: TitlesService, private route: ActivatedRoute, private router: Router, ) {
    this.route.url.subscribe(url => {
      const urls = router.routerState.snapshot.url.split("/");
      this.isTitleHome = urls.length === 3;
      this.id = urls[2];
      if (!this.isTitleHome) {
        this.titleType = urls[3].split('#')[0];
        if (this.titleType === "officialsites")
          this.titleType = "externalsites";
        this.service.getTitleDetail(this.id, this.titleType).subscribe(data => {
          this.data = data;
          // http%3A%2F%2Fwww.imdb.com%2Ftitle%2F{{id}}%2F
          // {{data.name}}({{data.year}})%20-%20https%3A%2F%2Fwww.imdb.com%2Ftitle%2F{{id}}%2F"
          this.fbUrl = "http://www.imdb.com/title/" + this.id;
          this.twitterUrl = data.item.name + data.item.year + "-https://www.imdb.com/title/" + this.id;
        });
      }

    });
  }

  ngOnInit() {
  }

}
