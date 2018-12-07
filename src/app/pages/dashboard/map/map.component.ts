import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

export interface OptionsMap {
  layers ? : Array<any>,
  zoom ? : number,
  center ? : any,
}

@Component({
  selector: 'ngx-map',
  styleUrls: ['./map.component.scss'],
  template: `<nb-card>
  <nb-card-header>Ma position</nb-card-header>
  <nb-card-body>
    <div leaflet [leafletOptions]="options" (leafletMapReady)="onMapReady($event)"></div>
  </nb-card-body>
</nb-card>`,
})
export class MapComponent implements OnInit {
  static position: Position;

  options : OptionsMap;

  map : L.Map;

  static mapReady: boolean = false;

  constructor() {
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      ],
      zoom: 5,
      center: L.latLng({lat: 0, lng: 0}),
    }
  }

  onMapReady(map: L.Map) {
    this.map = map;
    let instance = this;
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position : any) {
        MapComponent.position = position;
        instance.map.setView(L.latLng({ lat: position.coords.latitude, lng: position.coords.longitude }), 20);
        L.marker([position.coords.latitude, position.coords.longitude]).addTo(instance.map);
        MapComponent.mapReady = true;
      });
    } 
    else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }

  ngOnInit(): void {

  }

  public static getPosition() {
    return MapComponent.position;
  }
}
