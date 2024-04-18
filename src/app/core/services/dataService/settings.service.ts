import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService implements OnDestroy {
  fontSize!: string;
  user: any;
  customerID!: string;
  pets: any;

  constructor() {}

  ngOnDestroy() {
    this.customerDataSubject.complete();
    this.petsDataSubject.complete();
  }

  private fontSizeSubject = new BehaviorSubject<any>('default');
  private customerDataSubject = new BehaviorSubject<any>(null);
  private petsDataSubject = new BehaviorSubject<any>(null);

  setFontSize(data: string) {
    this.fontSizeSubject.next(data);
    this.fontSize = data;
  }

  getFontSize() {
    return this.fontSizeSubject.asObservable();
  }

  setCustomerData(user: any) {
    this.customerDataSubject.next(user);
  }

  getCustomerData() {
    return this.customerDataSubject.asObservable();
  }

  setPetData(pets: any) {
    this.petsDataSubject.next(pets);
  }

  getPetData() {
    return this.petsDataSubject.asObservable();
  }

  clearUserData() {
    this.user = null;
  }
}
