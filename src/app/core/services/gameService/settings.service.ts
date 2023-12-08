import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  fontSize!: string;

  constructor() {}

  private fontSizeSubject = new BehaviorSubject<any>('default');

  setFontSize(data: string) {
    this.fontSizeSubject.next(data);
    this.fontSize = data;
  }

  getFontSize() {
    return this.fontSizeSubject.asObservable();
  }
}
