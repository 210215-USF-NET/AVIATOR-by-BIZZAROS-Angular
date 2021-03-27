import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pilot } from '../models/pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotRESTServiceService {
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  }
  url: string = 'https://localhost:4200/api/jawn';
  constructor(private http: HttpClient) { }
  AddPilot(pilot2Add: pilot): Observable<pilot>
  {
    return this.http.post<pilot>(this.url, pilot2Add, this.httpOptions);
  }
  GetPilotsByEmail(email: string): Observable<pilot[]>
  {
    return this.http.get<pilot[]>(this.url, this.httpOptions);
  }
}
