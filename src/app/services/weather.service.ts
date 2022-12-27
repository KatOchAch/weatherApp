import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherAPIService } from '../services/weather-api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private weatherAPIService: WeatherAPIService ) {}

  getDetailsSubscribe() {
      this.weatherAPIService.getDetails().subscribe(data => {
        console.log(data);
    });
  }
}
  
   export interface Details {
    temperature_2m_max?:string | number
    apparent_temperature_max?:string | number
    sunrise?:string | number
    sunset?:string | number
    precipitation_sum?:string | number
    windspeed_10m_max?:string | number
    winddirection_10m_dominant?:string | number
   }
  

// modyfikowac te dane 
