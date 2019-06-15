import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { IMetadata, ILocation } from 'src/app/models/showtimes';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-refinement',
  templateUrl: './refinement.component.html',
  styleUrls: ['./refinement.component.scss']
})
export class RefinementComponent implements OnInit, OnChanges {
  @Input() data: IMetadata[];
  @Input() bSearchMode: boolean;

  @Output() refineChange = new EventEmitter();
  ratingInc = [];
  ratingRev = [];

  from = '1';
  to = '10';

  fromVote = '';
  toVote = '';

  fromRange = '';
  toRange = '';

  private selectedTab: string;
  private bRefine: boolean;

  selectedValues: string[];
  catList = {};

  private location: ILocation;


  constructor(private router: Router, private service: LocationService) {
    for (let index = 1; index <= 10; index += 0.1) {
      this.ratingInc.push(Math.round(index * 10) / 10);
    }
    this.ratingRev = [...this.ratingInc].reverse();
    this.bRefine = false;

  }

  ngOnInit() {
    this.location = this.service.getLocation();
    console.log(this.data)
  }

  ngOnChanges() {

    if (this.data.length > 0 && this.selectedTab == null) {
      this.selectedTab = this.data[0].categoryName;
    }

    let selectedValues = [];
    this.data.forEach(element => {
      selectedValues = selectedValues.concat(element.values.filter(x => x.checked).map(x => x.name));
    });


    if (this.from !== '1' && this.to !== '10') {
      selectedValues = selectedValues.concat(this.from + '-' + this.to + ' IMDb user rating (average)');
    } else {
      if (this.from !== '1') {
        selectedValues = selectedValues.concat('At least ' + this.from + ' IMDb user rating (average)');
      } else if (this.to !== '10') {
        selectedValues = selectedValues.concat('No more than ' + this.to + ' IMDb user rating (average)');
      }
    }

    if (this.fromVote && this.toVote) {
      selectedValues = selectedValues.concat(this.fromVote + '-' + this.toVote + ' Number of votes');
    } else {
      if (this.fromVote) {
        selectedValues = selectedValues.concat('No more than ' + this.fromVote + ' Number of votes');
      } else if (this.toVote) {
        selectedValues = selectedValues.concat('At least ' + this.toVote + ' Number of votes');
      }
    }

    if (this.fromRange && this.toRange) {
      selectedValues = selectedValues.concat(this.fromRange + '-' + this.toRange + ' Release year or range');
    } else {
      if (this.fromRange) {
        selectedValues = selectedValues.concat('No more than ' + this.fromRange + ' Release year or range');
      } else if (this.toRange) {
        selectedValues = selectedValues.concat('At least ' + this.toRange + ' Release year or range');
      }
    }

    this.selectedValues = selectedValues;
  }

  onCategoryClick(catName: string) {
    this.selectedTab = catName;
  }

  onRefine() {
    if (this.bRefine === false) {
      this.bRefine = true;
    } else {
      this.bRefine = false;
    }
  }

  onChecked(catName: string, value: string) {
    const query = this.data.map(d => {
      let valueString = '';
      const list = d.values.filter(t => t.checked).map(v => {
        valueString += v.id + ',';

        return v.id;
      });
      if (valueString[valueString.length - 1] === ',') {
        valueString = valueString.substr(0, valueString.length - 1);
      }
      this.catList[d.searchKey] = valueString !== '' ? valueString : null;
    });
    this.refineChange.emit(this.catList);
  }

  onGetRatingChanged(event) {
    this.catList['user_rating'] = (this.from === '1' ? '' : this.from) + '%2C' + (this.to === '10' ? '' : this.to);
    this.refineChange.emit(this.catList);
  }

  onVoteSearch() {
    this.catList['num_votes'] = this.fromVote + ',' + this.toVote;
    this.refineChange.emit(this.catList);
  }

  onRangeSearch() {
    this.catList['release_date'] = this.fromRange + ',' + this.toRange;
    this.refineChange.emit(this.catList);
  }

  onDeselect(item: string) {
    const index = this.selectedValues.indexOf(item);
    if (index !== -1) {
      this.selectedValues.splice(index, 1);
    }

    this.data.forEach(element => {
      // let valueString = this.catList[element.searchKey];
      element.values.forEach(v => {
        if (v.name === item) {
          v.checked = false;
          // console.log("gg", valueString, this.catList, element.searchKey, item)
          // const indexx = valueString.indexOf(item);
          // if (indexx !== -1)
          //   valueString.splice(indexx, 1);
          // this.catList[element.searchKey] = valueString;
          // return;
        }
      });

    });


  }
}
