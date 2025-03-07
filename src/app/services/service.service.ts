import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/profile");
  }

  viewResume(): Observable<any> {
    return this.http.get(this.apiUrl+"/resume/download", { responseType: 'blob' });
  }

  downloadResume(): Observable<Blob> {
    console.log("Download API called");
    return this.http.get(this.apiUrl+"/resume/download", { responseType: 'blob' });
  }

  // Upload the file to the server
  uploadResume(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl+"/resume/upload", formData, {
      headers: new HttpHeaders(),
      observe: 'response',
    });
  }

}
