import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiURL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  registerCustomer(
    firstName: string,
    lastName: string,
    contactNumber: string,
    email: string,
    suburb: string,
    postcode: string,
    password: string
  ): Observable<any> {
    const body = {
      firstName,
      lastName,
      contactNumber,
      email,
      suburb,
      postcode,
      password,
    };
    return this.http.post(`${this.apiURL}/registration-customer`, body);
  }

  registerPet(
    customerID: string,
    petType: string,
    petName: string,
    petBreed: string,
    petAge: string,
    petGender: string
  ): Observable<any> {
    const body = {
      customerID,
      petType,
      petName,
      petBreed,
      petAge,
      petGender,
    };
    return this.http.post(`${this.apiURL}/registration-pet`, body);
  }

  customerLogin(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiURL}/login`, body);
  }

  retrievePets(customerID: string) {
    const body = { customerID };
    return this.http.post(`${this.apiURL}/retrieve-pets`, body);
  }
}
