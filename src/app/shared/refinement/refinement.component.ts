import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { IMetadata } from 'src/app/models/showtimes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refinement',
  templateUrl: './refinement.component.html',
  styleUrls: ['./refinement.component.scss']
})
export class RefinementComponent implements OnInit, OnChanges {
  @Input() data: IMetadata[];
  private selectedTab: string;
  @Output() refineChange = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.data.length > 0 && this.selectedTab == null)
      this.selectedTab = this.data[0].categoryName;
  }

  onClick(catName: string) {
    this.selectedTab = catName;
  }

  onChecked(catName: string, value: string) {
    const catList = {};

    const query = this.data.map(d => {
      //if checked, then uncheck
      let valueString = "";
      const list = d.values.filter(t => t.checked).map(v => {
        valueString += v.name + ","
        return v.name;
      });
      if (valueString[valueString.length - 1] == ',') {
        valueString = valueString.substr(0, valueString.length - 1);
      }
      if (valueString !== "")
        catList[d.searchKey] = valueString;
    })
    this.refineChange.emit(catList);
  }
}