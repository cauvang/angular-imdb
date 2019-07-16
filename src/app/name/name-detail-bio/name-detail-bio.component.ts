import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/services/name.service';
import { Router } from '@angular/router';
import { INameDetailList } from 'src/app/models/name';

@Component({
  selector: 'app-name-detail-bio',
  templateUrl: './name-detail-bio.component.html',
  styleUrls: ['./name-detail-bio.component.scss']
})
export class NameDetailBioComponent implements OnInit {
  private id: string;
  private data: INameDetailList[];
  private nameType: string;
  private isHTML = false;

  constructor(private service: NameService, private router: Router) {
    const urls = this.router.routerState.snapshot.url.split('/');
    this.id = urls[2];
    this.nameType = urls[3];
    // switch (this.titleType) {
    //   case "quotes":
    //   case "crazycredits":
    //   case "soundtrack":
    //     this.isHTML = true;
    //     break;
    //   default:
    //     this.isHTML = false;
    //     break;
    // }
  }

  ngOnInit() {
    this.service.getNameDetail(this.id, this.nameType).subscribe(data => this.data = data.items);
  }

}
