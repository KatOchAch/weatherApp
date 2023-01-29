import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

import { WeatherApiData } from '../models/weather-api'
import { WeatherFormattedData } from '../models/weather-formatted'
import { WeatherAPIService } from '../services/weather-api.service'

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    constructor(private weatherAPIService: WeatherAPIService) {}

    getDetailsSubscribe(): Observable<WeatherFormattedData> {
        return this.weatherAPIService.getDetails().pipe(
            map((data: WeatherApiData) => {
                const currentHours = new Date().getHours()
                return {
                    temperature: data.hourly.temperature_2m[currentHours],
                    rain: data.hourly.rain[currentHours],
                    predkoscWiatru: data.hourly.windspeed_10m[currentHours],
                    cisnienie: data.hourly.pressure_msl[currentHours],
                    tempOczuwalna:
                        data.hourly.apparent_temperature[currentHours],
                    cloudly: data.hourly.cloudcover[currentHours],
                    dzien: data.daily.time[0],
                    wschod: data.daily.sunrise[0].substring(11, 16),
                    zachod: data.daily.sunset[0].substring(11, 16),

                    temperature1: data.daily.temperature_2m_max[1],
                    rain1: data.daily.rain_sum[1],
                    predkoscWiatru1: data.daily.windspeed_10m_max[1],
                    tempOczuwalna1: data.daily.apparent_temperature_max[1],
                    cloudly1: data.hourly.cloudcover[currentHours],
                    dzien1: data.daily.time[1],
                    wschod1: data.daily.sunrise[1].substring(11, 16),
                    zachod1: data.daily.sunset[1].substring(11, 16),

                    temperature2: data.daily.temperature_2m_max[2],
                    rain2: data.daily.rain_sum[2],
                    predkoscWiatru2: data.daily.windspeed_10m_max[2],
                    tempOczuwalna2: data.daily.apparent_temperature_max[2],
                    cloudly2: data.hourly.cloudcover[currentHours],
                    dzien2: data.daily.time[2],
                    wschod2: data.daily.sunrise[2].substring(11, 16),
                    zachod2: data.daily.sunset[2].substring(11, 16),

                    temperature3: data.daily.temperature_2m_max[3],
                    rain3: data.daily.rain_sum[3],
                    predkoscWiatru3: data.daily.windspeed_10m_max[3],
                    tempOczuwalna3: data.daily.apparent_temperature_max[3],
                    cloudly3: data.hourly.cloudcover[currentHours],
                    dzien3: data.daily.time[3],
                    wschod3: data.daily.sunrise[3].substring(11, 16),
                    zachod3: data.daily.sunset[3].substring(11, 16),

                    temperature4: data.daily.temperature_2m_max[4],
                    rain4: data.daily.rain_sum[4],
                    predkoscWiatru4: data.daily.windspeed_10m_max[4],
                    tempOczuwalna4: data.daily.apparent_temperature_max[4],
                    cloudly4: data.hourly.cloudcover[currentHours],
                    dzien4: data.daily.time[4],
                    wschod4: data.daily.sunrise[4].substring(11, 16),
                    zachod4: data.daily.sunset[4].substring(11, 16),
                }
            })
        )
    }
}


