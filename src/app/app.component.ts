import { Component } from '@angular/core'; 
import { Http, Response } from '@angular/http'; 
@Component({  
	selector: 'app-root', 
	templateUrl: 'app.component.html', 
	styleUrls: ['app.component.css'] 
    }) 
export class AppComponent 
{
	constructor(private http:Http){}
    title = 'Welcome to CityWeather';
    city=""; 
    search() {
        this.http.get('http://api.apixu.com/v1/current.json?key=32234931b5b748a2909130159170609&q='+this.city+'&days=10')
        .subscribe(
        (res:Response)=>{
            const weatherCity = res.json();
            console.log(weatherCity);
            //document.write(weatherCity);
        }

           )
    }
}
    
