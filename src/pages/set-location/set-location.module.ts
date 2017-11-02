import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetLocationPage } from './set-location';

@NgModule({
  declarations: [
    SetLocationPage
  ],
  imports: [
    IonicPageModule.forChild(SetLocationPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdSx20qbjE1tjyUMcMKl4RCvVIOrVJF1k'
    })
  ]
})
export class SetLocationPageModule {}
