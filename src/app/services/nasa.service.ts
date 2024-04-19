import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment'; 

/* serwis dla api  dla nasa astronomy picture of the day */

@Injectable({  providedIn: 'root' })
  
  
export class NasaService {

  private http: HttpClient=inject(HttpClient);
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  
  // pobiera apod na dzisiaj oraz na dzien gdy jest podana data
  getApod(date?: string): Observable<any> {
    let params = new HttpParams()
      .set('api_key', environment.nasaApiKey);
    if (date) {
      params = params.set('date', date);
    }  

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => response)
    );
  }

  // Pobiera APOD od określonej daty startowej do dzisiaj
  getApodFromStartDate(startDate: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', environment.nasaApiKey)
      .set('start_date', startDate);

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => response)
    );
  }

}
