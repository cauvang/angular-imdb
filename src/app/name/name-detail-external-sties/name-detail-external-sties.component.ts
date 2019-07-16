import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { INameDetailList } from 'src/app/models/name';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-name-detail-external-sties',
  templateUrl: './name-detail-external-sties.component.html',
  styleUrls: ['./name-detail-external-sties.component.scss']
})
export class NameDetailExternalStiesComponent implements OnInit {
  private data: INameDetailList[];
  private id: string;

  constructor(private service: NameService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];
    this.service.getNameDetail(this.id, 'externalsites').subscribe(data => {
      this.data = data.items;
    });
  }
  ngOnInit() {
  }

}
