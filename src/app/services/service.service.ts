import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'https://nikiportfolioapp.azurewebsites.net';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    console.log("before call");
    return this.http.get<any>(this.apiUrl+"/WeatherForecast");
  }

}
