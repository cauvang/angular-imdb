import { Component, OnInit } from '@angular/core';
import { INameDetailList } from 'src/app/models/name';
import { NameService } from 'src/app/services/name.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-detail-other-works',
  templateUrl: './name-detail-other-works.component.html',
  styleUrls: ['./name-detail-other-works.component.scss']
})
export class NameDetailOtherWorksComponent implements OnInit {

  private id: string;
  private data: INameDetailList[];

  constructor(private service: NameService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];

  }

  ngOnInit() {
    this.service.getNameDetail(this.id, 'otherworks').subscribe(data => this.data = data.items);
  }

}
