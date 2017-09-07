import { Component } from '@angular/core';
import { WeatherSearchService } from './weather-search.service';
@Component({
  selector: 'app-root',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.service.css'],
  providers: [WeatherSearchService]
})
export class AppComponent {
   forcastDetail: Object;
	constructor(private service: WeatherSearchService){}
  
	getDetails(city) {
		this.service.searchCity(city.value)
	   .subscribe(forcastDetail =>{
		this.forcastDetail = forcastDetail.forecast.forecastday;
		//console.log(forcastDetail);
		});
	}
}


 
