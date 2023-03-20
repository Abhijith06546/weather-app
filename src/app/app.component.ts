import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherapp';
  myweather: any;
  temperature: number = 0;
  location: string = 'alappuzha';

  constructor(private weatherservice: WeatherService) { }

  ngOnInit(): void {
    this.getweather(this.location);
  }

  onSubmit() {
    this.getweather(this.location);

  }

  private getweather(location: string) {
    this.weatherservice.getweather(location)
      .subscribe((result: any) => {
        console.log(result);
        this.myweather = result;
        console.log(this.myweather);
        this.temperature = this.myweather.main.temp;
      })
  }
}
