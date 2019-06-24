import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/services/name.service';
import { Router } from '@angular/router';
import { INameType, INameDetailList } from 'src/app/models/name';

@Component({
  selector: 'app-name-bio',
  templateUrl: './name-bio.component.html',
  styleUrls: ['./name-bio.component.scss']
})
export class NameBioComponent implements OnInit {
  private id: string;
  private data: INameDetailList[];

  constructor(private service: NameService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];

  }

  ngOnInit() {
    this.service.getNameDetail(this.id, 'bio').subscribe(data => this.data = data.items);
  }

}
