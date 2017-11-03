import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { Location } from '../../models/location';
import { SetLocationPage } from '../set-location/set-location';

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html'
})
export class AddPlacePage {
  imageUrl = '';
  location: Location = {
    lat: 41.390205,
    lng: 2.154007
  };
  locationSet = false;

  constructor(private modalController: ModalController, private geolocation: Geolocation, private loadingController: LoadingController, private toastController: ToastController, private camera: Camera) {}

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

  locate() {
    const loader = this.loadingController.create({
      content: 'Getting your location...'
    });
    loader.present();
    this.geolocation.getCurrentPosition().then((resp) => {
      loader.dismiss();
      this.location = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      this.locationSet = true;
    }).catch((error) => {
      loader.dismiss();
      const toast = this.toastController.create({
        message: 'Could not get your location. Please pick it manually.',
        duration: 2500
      });
      toast.present();
      // console.log('Error getting location', error);
    });
  }

  takePhoto() {
    const options: CameraOptions = {
      correctOrientation: true,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.imageUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      const toast = this.toastController.create({
        message: err,
        duration: 2500
      });
      toast.present();
    });
  }
}
