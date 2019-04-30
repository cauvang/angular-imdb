import { Component, OnInit } from '@angular/core';
import { FindService } from 'src/app/services/find.service';
import { IFinder } from 'src/app/models/find';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-home',
  templateUrl: './find-home.component.html',
  styleUrls: ['./find-home.component.scss']
})
export class FindHomeComponent implements OnInit {
  private data: IFinder;
  private queryParams: any;
  private displayAll: boolean;

  constructor(private service: FindService, private route: ActivatedRoute) {
    this.displayAll = true;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.queryParams = queryParams;
      if (queryParams.s === 'all') {
        this.displayAll = true;
      } else { this.displayAll = false; }

      this.LoadFindResult();
    });
  }

  private LoadFindResult() {
    this.service.getFindResult(this.queryParams).subscribe(data => {
      this.data = data;
    });

  }


}
