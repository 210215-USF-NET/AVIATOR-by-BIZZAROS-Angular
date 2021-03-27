import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRESTServiceService {
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }
  url: string = 'https://localhost:4200/api/jawn'
  constructor(private http: HttpClient) { }
  GetUserByEmail(email: string): Observable<user>
  {
    return this.http.get<user>(this.url, this.httpOptions);
  }
}
