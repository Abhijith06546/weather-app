import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweather(location: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=92f9fd09d10cfef618a0f65d0a258c8f&units=metric`);
  }
}
