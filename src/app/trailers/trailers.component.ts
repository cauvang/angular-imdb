import { Component, OnInit, Input } from '@angular/core';
import { TrailersService } from '../services/trailers.service';
import { IGetTrailerResponse } from '../models/trailer';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss']
})
export class TrailersComponent implements OnInit {


  private popularTrailers: IGetTrailerResponse[];
  private recentTrailers: IGetTrailerResponse[];
  private tvTrailers: IGetTrailerResponse[];

  constructor(private service: TrailersService) { }

  ngOnInit() {
    this.service.getPopularTrailers().subscribe((data) => { this.popularTrailers = data; });
    this.service.getRecentTrailers().subscribe((data) => { this.recentTrailers = data; });
    this.service.getTVTrailers().subscribe((data) => { this.tvTrailers = data; });

  }

}
