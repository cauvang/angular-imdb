import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  public data = [
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
  ];
  @Output() sortChange = new EventEmitter();

  sortBy = "moviemeter";
  sortDirection: string = "asc";
  sortDirectionTitle: string;


  constructor() { }

  ngOnInit() {
  }

  onSortByChanged(event) {
    this.sortChange.emit(this.sortBy + ',' + this.sortDirection);
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
    this.sortChange.emit(this.sortBy + ',' + this.sortDirection);
  }
}
