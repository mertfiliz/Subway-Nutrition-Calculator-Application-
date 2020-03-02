import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Modal } from 'ionic-angular';
import { MyApp } from './app.component';

import { UrunlerPage } from '../pages/urunler/urunler';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    UrunlerPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UrunlerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
