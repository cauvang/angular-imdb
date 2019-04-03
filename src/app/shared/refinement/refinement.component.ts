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
  fromStr = "";
  to = "10";
  toStr = "";
  private bRefine: boolean;

  selectedValues: string[];
  catList = {};



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

    if (this.fromStr != "" && this.toStr != "")
      selectedValues = selectedValues.concat(this.from + "-" + this.to + " IMDb user rating (average)");
    else if (this.fromStr != "")
      selectedValues = selectedValues.concat(this.fromStr);
    else if (this.toStr != "")
      selectedValues = selectedValues.concat(this.toStr);

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
    const query = this.data.map(d => {
      let valueString = "";
      const list = d.values.filter(t => t.checked).map(v => {
        valueString += v.name + ",";
        return v.name;
      });
      if (valueString[valueString.length - 1] == ',') {
        valueString = valueString.substr(0, valueString.length - 1);
      }
      this.catList[d.searchKey] = valueString !== "" ? valueString : null;
    })
    this.refineChange.emit(this.catList);
  }

  onGetRatingFromChanged(event) {
    if (this.from === "1")
      this.fromStr = "";
    else
      this.fromStr = "At least " + this.from + " IMDb user rating (average)";

    let catStr = null;
    if (this.from !== "1" || this.to !== "10")
      catStr = (this.from === "1" ? "" : this.from) + '%2C' + (this.to === "10" ? "" : this.to);
    this.catList['user_rating'] = catStr;
    this.refineChange.emit(this.catList);
  }

  onGetRatingToChanged(event) {
    if (this.to === "10")
      this.toStr = "";
    else
      this.toStr = "No more than " + this.to + " IMDb user rating (average)";

    let catStr = null;
    if (this.from !== "1" || this.to !== "10")
      catStr = (this.from === "1" ? "" : this.from) + '%2C' + (this.to === "10" ? "" : this.to);
    this.catList['user_rating'] = catStr;
    this.refineChange.emit(this.catList);
  }
}
