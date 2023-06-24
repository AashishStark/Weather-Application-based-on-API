import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '23351eefd8d2be1c2c0bf5d3e56e4143';
  constructor(private http: HttpClient) { }

  getWeatherDataByCoors(lat:number, lon:number) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'imperial')
      .set('appid', this.apiKey)
    return this.http.get(this.url, { params });
  }
  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'imperial')
      .set('appid', this.apiKey)
    return this.http.get(this.url, { params });
  }
}
