import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { ITopRated } from 'src/app/models/chart';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chart-top-rated',
  templateUrl: './chart-top-rated.component.html',
  styleUrls: ['./chart-top-rated.component.scss']
})
export class ChartTopRatedComponent implements OnInit {
  private data: ITopRated;
  private chartType: string = "top";

  constructor(private service: ChartsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chartType = params["chartType"];

      this.service.getCharts(this.chartType).subscribe((data) => {
        this.data = data;
      });
    })

  }

  onSortChange() {

  }


}
