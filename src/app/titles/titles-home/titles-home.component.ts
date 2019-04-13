import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-titles-home', templateUrl: './titles-home.component.html', styleUrls: ['./titles-home.component.scss']})
export class TitlesHomeComponent implements OnInit {
  private headers: string[] = ['Full cast and crew', 'Trivia', 'User reviews'];
  public toggleMegaMenu = false;
  constructor() {}

  ngOnInit() {}
  toggleMenuClick() {
    this.toggleMegaMenu = !this.toggleMegaMenu;
  }
}
