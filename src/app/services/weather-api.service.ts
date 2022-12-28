import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from './weather.service';


@Injectable()
export class WeatherAPIService {
  
  private url = "https://api.open-meteo.com/v1/forecast?latitude=51.10&longitude=17.03&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_min,sunrise,sunset,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant,shortwave_radiation_sum&current_weather=true&timezone=Europe%2FBerlin&start_date=2022-12-22&end_date=2022-12-31"

  constructor(private http:HttpClient) { 

  }

  getDetails(): Observable<Array<Details>> {
    return this.http.get<Array<Details>>(this.url)
      
  }  
}
