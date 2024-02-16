import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private el: ElementRef) {}

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
