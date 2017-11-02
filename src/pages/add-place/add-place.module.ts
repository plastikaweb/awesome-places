import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlacePage } from './add-place';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AddPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlacePage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdSx20qbjE1tjyUMcMKl4RCvVIOrVJF1k'
    })
  ],
})
export class AddPlacePageModule {}
