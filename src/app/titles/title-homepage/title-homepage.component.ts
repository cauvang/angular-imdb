import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TitlesService } from 'src/app/services/titles.service';
import { IMenuList, ITitle, IMenu, IUser } from 'src/app/models/title';
import { AppConfig } from 'src/app/models/constants';
import { APP_CONFIG } from 'src/app/app.config';

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
  private config: AppConfig;

  private titleType: string;
  private seeAlso: IMenu[];
  private userList: IUser[];
  private bHidden = true;
  private displayedMenu: IMenuList[];
  private selectedMenu: IMenuList;
  private unselectedMenu: IMenuList[];

  constructor(private service: TitlesService, private route: ActivatedRoute,
    private router: Router, @Inject(APP_CONFIG) config: AppConfig) {
    this.config = config;


    this.route.url.subscribe(url => {
      const urls = router.routerState.snapshot.url.split("/");
      this.isTitleHome = urls.length === 3;
      this.id = urls[2];
      if (!this.isTitleHome)
        this.titleType = urls[3];//.split('?')[0];
      if (this.menu)
        this.getSeeAlso();
    });

    this.service.getTitle_Menu(this.id).subscribe(data => {
      this.menu = data.items;
      this.userList = data.userList;

      this.selectedMenu = this.menu.find(x => {
        return x.items.some(item => item.url.includes(this.titleType))
      });
      this.unselectedMenu = this.menu.filter(x => x.name != this.selectedMenu.name);
      this.displayedMenu = [this.selectedMenu, ...[]];

      this.getSeeAlso();
    });

  }

  ngOnInit() {
    this.service.getTitle(this.id).subscribe(data => { this.data = data; });
  }

  getSeeAlso() {

    this.seeAlso = this.selectedMenu.items.filter(x => x.url.indexOf(this.titleType) === -1);
  }

  onExploreMore() {
    this.bHidden = false;
    this.displayedMenu = [this.selectedMenu, ...this.unselectedMenu];

  }

  onShowLess() {
    this.bHidden = true;
    this.displayedMenu = [this.selectedMenu, ...[]];

  }



}
