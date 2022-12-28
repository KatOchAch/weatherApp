import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {WeatherService} from './services/weather.service';
import {WeatherAPIService} from './services/weather-api.service';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClockComponent } from './clock/clock.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService,WeatherAPIService],

  bootstrap: [AppComponent]
})
export class AppModule { }
