import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiURL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }


}
