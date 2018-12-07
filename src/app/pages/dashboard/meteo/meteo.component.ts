import { Component, OnInit } from '@angular/core';
import { MeteoService } from './meteo.service';

export interface Wind {
  speed ? : number,
  degree ? : number
};

@Component({
  selector: 'ngx-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {
  humidity: number;
  wind: Wind;
  position : Position;
  temp: number;

  constructor(private meteoService : MeteoService) {

  }

  getMeteo() {
    this.meteoService.getWeather(this.position).subscribe(weather => {
      this.humidity = weather.list[0].main.humidity;
      this.wind = {
        speed: weather.list[0].wind.speed,
        degree: weather.list[0].wind.deg
      };
      this.temp = weather.list[0].main.temp
    });
  }

  ngOnInit() {
    if (navigator.geolocation) {
      let instance = this;
      navigator.geolocation.watchPosition(function(position : any) {
        instance.position = position;
        instance.getMeteo();
      });
    } 
    else { 
      console.log("Geolocation is not supported by this browser.");
    }

    this.humidity = 0;
    this.wind = {
      speed: 0,
      degree: 0
    };
  }
}
