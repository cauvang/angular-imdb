import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  private dataset = {
    "movie": [
      {
        name: "Popularity",
        value: "moviemeter"
      },
      {
        name: "Alphabetical",
        value: "alpha"
      },
      {
        name: "IMDb Rating",
        value: "user_rating"
      },
      {
        name: "Release Date",
        value: "release_date"
      },
      {
        name: "Runtime",
        value: "runtime"
      }
    ],
    "cinema": [
      {
        name: "Popularity",
        value: "movieMeter"
      },
      {
        name: "Title",
        value: "title"
      },
      {
        name: "User Rating",
        value: "userRating"
      },
      {
        name: "Release Date",
        value: "releaseDate"
      },
      {
        name: "Runtime",
        value: "runtime"
      }
    ]
  };
  @Output() sortChange = new EventEmitter();
  @Input() datasetType: string;

  sortBy = "moviemeter";
  sortDirection: string = "asc";
  sortDirectionTitle: string;
  data: [];

  constructor() {
  }

  ngOnInit() {
    this.data = this.dataset[this.datasetType];
    this.sortBy = this.dataset[this.datasetType][0].value;

  }

  onSortByChanged(event) {
    this.sortByType();
  }

  onSortDirectionClick() {
    if (this.sortDirection === "asc") {
      this.sortDirection = "desc";
      this.sortDirectionTitle = "Descending order";
    }
    else {
      this.sortDirection = "asc";
      this.sortDirectionTitle = "Ascending order";
    }
    this.sortByType();
  }

  private sortByType() {
    if (this.datasetType === "movie")
      this.sortChange.emit(this.sortBy + ',' + this.sortDirection);
    else if (this.datasetType === "cinema")
      this.sortChange.emit({ sort: this.sortBy, dir: this.sortDirection });
  }
}
