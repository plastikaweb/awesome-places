import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPageModule } from 'ionic-angular';
import { AddPlacePage } from './add-place';

@NgModule({
  declarations: [
    AddPlacePage
  ],
  imports: [
    IonicPageModule.forChild(AddPlacePage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdSx20qbjE1tjyUMcMKl4RCvVIOrVJF1k'
    })
  ],
  providers: [
    Geolocation
  ]
})
export class AddPlacePageModule {}
