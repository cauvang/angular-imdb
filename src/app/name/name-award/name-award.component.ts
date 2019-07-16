import { Component, OnInit } from '@angular/core';
import { INameDetailList } from 'src/app/models/name';
import { NameService } from 'src/app/services/name.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-award',
  templateUrl: './name-award.component.html',
  styleUrls: ['./name-award.component.scss']
})
export class NameAwardComponent implements OnInit {

  private id: string;
  private data: INameDetailList[];

  constructor(private service: NameService, private router: Router) {
    this.id = this.router.routerState.snapshot.url.split('/')[2];

  }

  ngOnInit() {
    this.service.getNameDetail(this.id, 'awards').subscribe(data => this.data = data.items);
  }
}
