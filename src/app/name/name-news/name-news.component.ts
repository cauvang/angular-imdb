import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { INameDetailList } from 'src/app/models/name';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-name-news',
  templateUrl: './name-news.component.html',
  styleUrls: ['./name-news.component.scss']
})
export class NameNewsComponent implements OnInit {
  private id: string;
  private data: INameDetailList[];

  constructor(private service: NameService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];

  }

  ngOnInit() {
    this.service.getNameDetail(this.id, 'news').subscribe(data => this.data = data.items);
  }
}
