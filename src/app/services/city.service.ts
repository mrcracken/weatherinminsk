import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  public API = '//api.openweathermap.org/data/2.5/weather?q=Minsk,by&APPID=dd9d29fc4d5a77d6c9ca2f37b6cf6cb9';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API);
  }

}
