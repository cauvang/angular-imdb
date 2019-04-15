import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/services/name.service';
import { IName } from 'src/app/models/name';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-name-home',
  templateUrl: './name-home.component.html',
  styleUrls: ['./name-home.component.scss']
})
export class NameHomeComponent implements OnInit {
  private data: IName;
  private id: string;

  constructor(private service: NameService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => { this.id = params['id']; });

  }

  ngOnInit() {
    this.service.getName(this.id).subscribe(data => { this.data = data; });
  }

}
