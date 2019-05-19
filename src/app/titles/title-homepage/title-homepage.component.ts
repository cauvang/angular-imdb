import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitlesService } from 'src/app/services/titles.service';
import { IMenuList, ITitle, IMenu } from 'src/app/models/title';

@Component({
  selector: 'app-title-homepage',
  templateUrl: './title-homepage.component.html',
  styleUrls: ['./title-homepage.component.scss']
})
export class TitleHomepageComponent implements OnInit {
  private isTitleHome = true;
  private id: string;
  private data: ITitle;
  private menu: IMenuList[];

  private selectedMenuInd = 0;//detail
  private titleType: string;
  private selectedTypeInd = 0;
  private selectedType: string;
  private seeAlso: IMenu[];

  private bHidden = true;
  private displayedMenu: IMenuList[];

  constructor(private service: TitlesService, private router: Router) {
    const urls = router.routerState.snapshot.url.split("/");
    this.isTitleHome = urls.length === 3;
    this.id = urls[2];
    if (!this.isTitleHome)
      this.selectedType = urls[3];
  }

  ngOnInit() {


    this.service.getTitle_Menu(this.id).subscribe(data => {
      this.menu = data;
      this.displayedMenu = this.menu.slice(0, 1);
      const selectedMenu = data[this.selectedMenuInd].items;
      this.titleType = selectedMenu[this.selectedTypeInd].name;
      this.seeAlso = selectedMenu.filter(x => x.url.indexOf(this.selectedType) === -1);
    });

    this.service.getTitle(this.id).subscribe(data => { this.data = data; });
  }

  onExploreMore() {
    this.bHidden = false;
    this.displayedMenu = this.menu;

  }

  onShowLess() {
    this.bHidden = true;
    this.displayedMenu = this.menu.slice(0, 1);

  }
}
