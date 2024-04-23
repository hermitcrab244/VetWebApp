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
  ownerIDs!: string[];

  constructor() {}

  ngOnDestroy() {
    this.customerDataSubject.complete();
    this.petsDataSubject.complete();
    this.inviteNotificationsSubject.complete();
  }

  private fontSizeSubject = new BehaviorSubject<any>('default');
  private customerDataSubject = new BehaviorSubject<any>(null);
  private petsDataSubject = new BehaviorSubject<any>(null);
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private inviteNotificationsSubject = new BehaviorSubject<any[]>([]);

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

  setIsLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  getIsLoggedIn() {
    return this.isLoggedInSubject.asObservable();
  }

  setInviteNotifications(invitations: any[]) {
    this.inviteNotificationsSubject.next(invitations);
  }

  getInviteNotifications() {
    return this.inviteNotificationsSubject.asObservable();
  }
}
