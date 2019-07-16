import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMenuList } from 'src/app/models/title';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() data: IMenuList[];
  @Input() name: string;
  @Input() type: string;

  private url: string;
  private bHidden: boolean = true;
  private displayedMenu: IMenuList[];
  private selectedMenu: IMenuList;
  private unselectedMenu: IMenuList[];

  constructor() {
    console.log("data", this.data)
  }

  ngOnInit() {
    this.url = document.location.href;
  }

  ngOnChanges(): void {
    console.log("type", this.type)
    if (this.type === undefined) {
      this.selectedMenu = this.data[0];
    } else {
      this.type = this.type.includes('?') ? this.type.split['?'][0] : this.type;
      this.selectedMenu = this.data.find(x => {
        return x.items.some(
          item => item.url.includes(this.type))
      });
    }
    console.log("aaa", this.type, this.data, this.selectedMenu)
    this.unselectedMenu = this.data.filter(x => x.name != this.selectedMenu.name);

    this.displayedMenu = [this.selectedMenu, ...[]];
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
