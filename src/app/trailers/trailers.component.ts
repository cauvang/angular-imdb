import { Component, OnInit, Input } from '@angular/core';
import { TrailersService } from '../services/trailers.service';
import { IGetTrailerResponse } from '../models/trailer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss']
})
export class TrailersComponent implements OnInit {
  private trailers: IGetTrailerResponse[];
  private trailerType: string;
  private isLoading: boolean;

  constructor(private service: TrailersService, private route: ActivatedRoute) {
    this.trailerType = "popular";
    this.isLoading = false;
    this.route.url.subscribe(url => {
      console.log("url", url);
      this.loadTrailers();
    });
  }

  ngOnInit() {
    this.loadTrailers();
  }

  loadTrailers() {
    this.trailers = [];
    this.isLoading = true;
    this.trailerType = this.route.snapshot.params['trailerType'];
    this.service.getTrailers(this.trailerType).subscribe((data) => { this.trailers = data; this.isLoading = false });

  }
}
