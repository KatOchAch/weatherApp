import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClockComponent } from './clock/clock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ClockComponent, 
  ],
  
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
    MaterialModule,
    MatNativeDateModule,
   
    
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
