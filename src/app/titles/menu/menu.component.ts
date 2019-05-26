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
  @Input() id: string;
  @Input() titleType: string;

  private bHidden: boolean = true;
  private displayedMenu: IMenuList[];
  private selectedMenu: IMenuList;
  private unselectedMenu: IMenuList[];

  constructor() { }

  ngOnInit() { }

  ngOnChanges(): void {
    this.selectedMenu = this.data.find(x => {
      return x.items.some(item => item.url.includes(this.titleType))
    });
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
