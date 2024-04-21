import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/core/services/backendService/api.service';
import { SettingsService } from 'src/app/core/services/dataService/settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoggedIn: boolean = false;
  userName: string = '';

  constructor(
    private settingService: SettingsService,
    private api: APIService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;

      this.api.customerLogin(email, password).subscribe(
        (response) => {
          console.log(response.message);
          console.log(response.user);

          this.settingService.setCustomerData(response.user);
          this.isLoggedIn = true;
          this.settingService.customerID = response.user.customer_id;
          this.userName = response.user.first_name;
          this.settingService.setIsLoggedIn(true);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
    } else {
      console.log('invalid');
    }
  }

  logout() {
    this.settingService.setIsLoggedIn(false);
    this.settingService.clearUserData();
    this.loginForm.reset();
    this.isLoggedIn = false;
    this.userName = '';
  }
}
