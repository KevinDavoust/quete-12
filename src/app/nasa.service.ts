import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiKey: string = "";

  constructor(public http: HttpClient) { }


  getImageOfTheDay(): Observable<any> {
    const url:string = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`
    return this.http.get<string>(url);
  }
}
