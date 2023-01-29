export interface WeatherApiData {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    hourly_units: HourlyUnits
    hourly: Hourly
    daily_units: DailyUnits
    daily: Daily
}

export interface HourlyUnits {
    time: string
    temperature_2m: string
    apparent_temperature: string
    rain: string
    pressure_msl: string
    cloudcover: string
    windspeed_10m: string
}

export interface Hourly {
    time: string[]
    temperature_2m: number[]
    apparent_temperature: number[]
    rain: number[]
    pressure_msl: number[]
    cloudcover: number[]
    windspeed_10m: number[]
}

export interface DailyUnits {
    time: string
    temperature_2m_max: string
    apparent_temperature_max: string
    sunrise: string
    sunset: string
    rain_sum: string
    windspeed_10m_max: string
}

export interface Daily {
    time: string[]
    temperature_2m_max: number[]
    apparent_temperature_max: number[]
    sunrise: string[]
    sunset: string[]
    rain_sum: number[]
    windspeed_10m_max: number[]
}
