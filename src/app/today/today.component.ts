import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
/// <reference types="@types/googlemaps" />
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit{
  lat: number = 0; lng: number = 0; weather: any;
  constructor(private weatherService: WeatherService) { }
  ngOnInit() {
    this.getLocation();
    //this.weatherService.getWeatherDataByCoors(35, 139).subscribe(console.log)
  }
  getLocation() {
    //if ("geolocation" in navigator) {standard browser API
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lng = success.coords.longitude;
        this.weatherService.getWeatherDataByCoors(this.lat, this.lng).subscribe(data => {
          this.weather = data;
        });
      })
    //}
  }
  getCity(city: string): any {
    
    this.weatherService.getWeatherDataByCityName(city).subscribe((data:any) => {
      this.weather = data;
      console.log(data);
      this.lat = this.weather.coord.lat;
      this.lng = this.weather.coord.lon;
    })
  }

  getCoords(event: any) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.weatherService.getWeatherDataByCoors(this.lat, this.lng).subscribe(data => {
      this.weather = data
    })
  }
}


