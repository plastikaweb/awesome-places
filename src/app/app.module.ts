import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AddPlacePage } from '../pages/add-place/add-place';
import { AddPlacePageModule } from '../pages/add-place/add-place.module';
import { HomePage } from '../pages/home/home';
import { PlacePage } from '../pages/place/place';
import { PlacePageModule } from '../pages/place/place.module';
import { SetLocationPage } from '../pages/set-location/set-location';
import { SetLocationPageModule } from '../pages/set-location/set-location.module';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PlacePageModule,
    AddPlacePageModule,
    SetLocationPageModule
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    MyApp,
    HomePage,
    PlacePage,
    AddPlacePage,
    SetLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
