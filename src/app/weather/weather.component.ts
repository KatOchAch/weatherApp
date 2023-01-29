import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { WeatherFormattedData } from '../models/weather-formatted'
import { WeatherService } from '../services/weather.service'

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
    // componentData?: WeatherFormattedData
    componentData$?: Observable<WeatherFormattedData>

    constructor(private weatherService: WeatherService) {}

    ngOnInit(): void {
        this.componentData$ = this.weatherService.getDetailsSubscribe()
    }
    }

// this.weatherService
//    .getDetailsSubscribe()
//     .subscribe({ next: (response) => (this.componentData = response) })

//  how to use debugger in chrome angular
