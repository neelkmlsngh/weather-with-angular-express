import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class WeatherSearchService {
   constructor(private http: Http){}
	searchCity(city:any) {
		return this.http.get('http://api.apixu.com/v1/forecast.json?key=9591410d0a4945a2a01130103170609&q='+city+'&days=10')
	           .map(res =>res.json());
              
}
}
