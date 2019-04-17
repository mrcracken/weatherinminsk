import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  weatherData: Array<any>;
  temperatureInCelsius: String;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getAll().subscribe(data => {
      this.weatherData = data;
    });
  }

}
