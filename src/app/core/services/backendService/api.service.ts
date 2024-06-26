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
    return this.http.post(`${this.apiURL}/retrieve-user-pets`, body);
  }

  retrieveDogsList(petType: string) {
    const body = { petType };
    return this.http.post(`${this.apiURL}/retrieve-all-dogs`, body);
  }

  sendInvite(
    invitationCode: string,
    senderID: string,
    receiverID: string,
    date: string,
    time: string,
    message: string,
    status: string
  ): Observable<any> {
    const body = {
      invitationCode,
      senderID,
      receiverID,
      date,
      time,
      message,
      status,
    };

    return this.http.post(`${this.apiURL}/send-invitation`, body);
  }

  checkInvites(customerID: string) {
    const body = { customerID };
    return this.http.post(`${this.apiURL}/check-invites`, body);
  }

  updateInviteStatus(invitationID: string, status: string) {
    const body = { invitationID, status };
    return this.http.post(`${this.apiURL}/update-invite-status`, body);
  }
}
