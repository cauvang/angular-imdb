import { Injectable } from '@angular/core';
import { ILocation } from '../models/showtimes';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getLocation(): ILocation {
    const existingSetting = localStorage.getItem("USER_LOCATION");
    if (existingSetting) {
      return JSON.parse(existingSetting);
    }
    return {
      postcode: '3030',
      country: 'AU'
    }
  }

  setLocation(location: ILocation) {
    localStorage.setItem("USER_LOCATION", JSON.stringify(location));
  }
}
