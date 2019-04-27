import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-home',
  templateUrl: './title-home.component.html',
  styleUrls: ['./title-home.component.scss']
})

export class TitleHomeComponent implements OnInit {
  private headers: string[] = ['Full cast and crew', 'Trivia', 'User reviews'];
  public toggleMegaMenu = false;
  constructor() { }

  ngOnInit() { }
  toggleMenuClick() {
    this.toggleMegaMenu = !this.toggleMegaMenu;
  }
}
