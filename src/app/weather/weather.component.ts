import { Component, OnInit, } from '@angular/core';
import { WeatherAPIService } from '../services/weather-api.service';
import { WeatherService } from '../services/weather.service';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [
    WeatherAPIService,
    WeatherService 
  ]
})
export class WeatherComponent {
 constructor (private weatherService: WeatherService){
 }
 ngOnInit(){}
 
 //getDetailsComponent() {
  //this.weatherService. getDetailsSubscribe()
 //}
}//
 



// dane z serwisu przypisac do obiektu w component.ts a pozniej komponent zainicjowac w html zeby sie wyswietlil
                
