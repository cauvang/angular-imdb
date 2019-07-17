import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NameService } from 'src/app/services/name.service';
import { INameType } from 'src/app/models/name';

@Component({
  selector: 'app-name-homepage',
  templateUrl: './name-homepage.component.html',
  styleUrls: ['./name-homepage.component.scss']
})
export class NameHomepageComponent implements OnInit {
  private isNameHome = true;
  private id: string;
  private nameType: string;
  private data: INameType;

  private fbUrl: string;
  private twitterUrl: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: NameService) {
    this.route.url.subscribe(url => {

      const urls = router.routerState.snapshot.url.split("/");
      this.isNameHome = urls.length === 3;
      this.id = urls[2];
      if (!this.isNameHome) {
        this.nameType = urls[3].split('#')[0];
        if (this.nameType === "officialsites")
          this.nameType = "externalsites";
        this.service.getNameDetail(this.id, this.nameType).subscribe(data => {
          this.data = data;
          this.fbUrl = "http://www.imdb.com/name/" + this.id;
          this.twitterUrl = data.item.title + "-https://www.imdb.com/name/" + this.id;
        });
      }
    });
  }

  ngOnInit() {
  }

}
