import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {YoutubePipe} from '../pipes/youtube/youtube';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {SpinnerPipe} from '../pipes/spinner/spinner';

@NgModule({ 
  declarations: [
    MyApp,
    HomePage,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
