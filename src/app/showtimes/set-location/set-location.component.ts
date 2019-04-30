import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ILocation } from 'src/app/models/showtimes';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-set-location',
  templateUrl: './set-location.component.html',
  styleUrls: ['./set-location.component.scss']
})
export class SetLocationComponent implements OnInit {
  private location: ILocation = {
    postcode: '3030',
    country: 'AU'
  };
  private countryList: string[] = ['AR', 'AU', 'CA', 'CL', 'ES', 'FR', 'IT', 'MX', 'NZ', 'PT', 'UK', 'US'];
  public bChange = false;
  @Output() getLocation = new EventEmitter();

  constructor(private locationService: LocationService, private router: Router) {
    this.location = locationService.getLocation();

  }

  ngOnInit() {
    // this.getLocation.emit(JSON.stringify(this.location));

  }
  onChangeClick() {
    this.bChange = true;
  }

  onClickGo() {
    this.bChange = false;
    this.locationService.setLocation(this.location);

    let url = this.router.routerState.snapshot.url;
    url = url.replace(/AR|AU|CA|CL|ES|FR|IT|MX|NZ|PT|UK|US/, this.location.country);
    url = url.replace(/\/\d{4,}/, '/' + this.location.postcode);
    this.getLocation.emit(this.location);
    this.router.navigateByUrl(url); // + '/' + this.location.country + '/' + this.location.postcode);
  }

  onCancel() {
    this.bChange = false;
  }

}
