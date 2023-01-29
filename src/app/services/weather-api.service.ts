import { HttpClient } from '@angular/common/http'
import { Injectable, Input, Output } from '@angular/core'
import { Observable } from 'rxjs'

import { WeatherApiData } from '../models/weather-api'

@Injectable({
    providedIn: 'root',
})
export class WeatherAPIService {
    constructor(private http: HttpClient) {}

    private url ='https://api.open-meteo.com/v1/forecast?latitude=51.10&longitude=17.03&hourly=temperature_2m,apparent_temperature,rain,pressure_msl,cloudcover,windspeed_10m&daily=temperature_2m_max,apparent_temperature_max,sunrise,sunset,rain_sum,windspeed_10m_max&timezone=Europe%2FBerlin&start_'

    day = new Date()
    furureDay = new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000)

    currentDate = this.day.toISOString().substring(0, 10)
    futureDate = this.furureDay.toISOString().substring(0, 10)

    selectId: string = 'latitude=51.10&longitude=17.03'

    receiveId($event: string) {
        this.selectId = $event
    }

    getDetails(): Observable<WeatherApiData> {
        return this.http.get<WeatherApiData>(
            this.url+
                'date=' +
                this.currentDate +
                '&end_date=' +
                this.futureDate
        )
    }
}
