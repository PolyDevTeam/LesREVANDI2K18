import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
    })
};

export interface Coord {
    lat: number,
    lon: number
};

export interface WeatherData {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number,
}

export interface Wind {
    speed: number,
    deg: number,
}

export interface Weather {
    id: number,
    name: String,
    coord: Coord,
    main: WeatherData,
    dt: number,
    wind: Wind,
    sys: Object,
    rain: any,
    cloud: any,
    weather: any
};

export interface WeatherResponse {
    message: String,
    cod: number,
    count: number,
    list: Array<Weather>
}

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
    constructor(private http: HttpClient) { 

    }

    public getWeather(position : Position) : Observable<WeatherResponse> {
        let url = 'http://api.openweathermap.org/data/2.5/find?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=11385c3cc6789f2c3527a3c91b58a24a';
        return this.http.get<WeatherResponse>(url, httpOptions)
        .pipe();
    }
}
