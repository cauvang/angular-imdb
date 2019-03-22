import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  public data = [
    "Popularity",
    "Alphabetical",
    "IMDb Rating",
    "Release Date",
    "Runtime"
  ];
  sortDirection: string = "asc";
  sortBy: string;
  sortDirectionTitle: string;

  constructor() { }

  ngOnInit() {
  }
  onSortByChanged(event) {
    console.log(this.sortBy);
    console.log(event);
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
  }
}
