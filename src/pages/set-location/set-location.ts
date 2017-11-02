import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Location } from '../../models/location';

@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html'
})
export class SetLocationPage {
  location: Location;
  marker: Location;

  constructor(private navParams: NavParams, private viewController: ViewController) {
    this.location = this.navParams.get('location');
    this.marker = this.navParams.get('locationSet') ? this.location : null;
  }

  setMarker(event: any) {
    this.marker = {
      lat: event.coords.lat,
      lng: event.coords.lng
    };
  }

  confirm() {
    this.viewController.dismiss({ location: this.marker });
  }

  abort() {
    this.viewController.dismiss();
  }
}
