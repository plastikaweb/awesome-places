import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, ModalController } from 'ionic-angular';
import { Location } from '../../models/location';
import { SetLocationPage } from '../set-location/set-location';

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html'
})
export class AddPlacePage {
  location: Location = {
    lat: 41.390205,
    lng: 2.154007
  };
  locationSet = false;

  constructor(private modalController: ModalController) {}

  submit(form: NgForm) {
    console.log(form.value);
  }

  openMap() {
    const modal = this.modalController.create(SetLocationPage, {
      location: this.location,
      locationSet: this.locationSet
    });
    modal.present();
    modal.onDidDismiss(data => {

      if (data) {
        console.log(data);
        this.location = data.location;
        this.locationSet = true;
      }
    });
  }
}
