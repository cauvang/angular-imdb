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
  ratingInc = [];
  ratingRev = [];
  from = "1";
  to = "10";
  private bRefine: boolean;

  selectedValues: string[];

  constructor(private router: Router) {
    for (let index = 1; index <= 10; index += 0.1) {
      this.ratingInc.push(Math.round(index * 10) / 10);
    }
    this.ratingRev = [...this.ratingInc].reverse();
    this.bRefine = false;

  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.data.length > 0 && this.selectedTab == null)
      this.selectedTab = this.data[0].categoryName;
    let selectedValues = [];

    this.data.forEach(element => {
      selectedValues = selectedValues.concat(element.values.filter(x => x.checked).map(x => x.name));
    });
    this.selectedValues = selectedValues;

  }

  onClick(catName: string) {
    this.selectedTab = catName;
  }

  onRefine() {
    if (this.bRefine == false)
      this.bRefine = true;
    else
      this.bRefine = false;
  }

  onChecked(catName: string, value: string) {
    const catList = {};

    const query = this.data.map(d => {
      // console.log("ddd", d);

      let valueString = "";
      const list = d.values.filter(t => t.checked).map(v => {
        valueString += v.name + ",";
        return v.name;
      });
      if (valueString[valueString.length - 1] == ',') {
        valueString = valueString.substr(0, valueString.length - 1);
      }
      //if (valueString !== "")
      catList[d.searchKey] = valueString !== "" ? valueString : null;
    })
    // console.log("emit", catList);
    this.refineChange.emit(catList);
  }
}
