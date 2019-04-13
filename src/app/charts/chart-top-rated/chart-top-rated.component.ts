import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { ITopRated } from 'src/app/models/chart';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chart-top-rated',
  templateUrl: './chart-top-rated.component.html',
  styleUrls: ['./chart-top-rated.component.scss']
})
export class ChartTopRatedComponent implements OnInit {
  private data: ITopRated;
  private chartType = 'top';

  constructor(private service: ChartsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chartType = params['chartType'];

      this.reloadData();
    });

  }


  reloadData() {
    const url = document.location.href;
    let queryString = '';
    if (url.indexOf('?')) {
      queryString = url.split('?')[1];
    }
    this.service.getCharts(this.chartType, queryString).subscribe((data) => {
      this.data = data;
    });
  }

  onNavigate(item) {
    console.log(item.genre);
    this.router.navigateByUrl('/search/title?genres=', item.genre);
  }

  onSortChange(sortBy: string) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { sort: sortBy },
        queryParamsHandling: 'merge'
      });
    this.reloadData();

  }

}
