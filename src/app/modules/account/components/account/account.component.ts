import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/core/services/dataService/settings.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  contactNumber: string = '';
  email: string = '';
  suburb: string = '';
  postcode: string = '';

  constructor(private settingsService: SettingsService) {}

  ngOnInit() {
    this.settingsService.getCustomerData().subscribe((user) => {
      this.firstName = user.first_name;
      this.lastName = user.last_name;
      this.contactNumber = user.phone;
      this.email = user.email;
      this.suburb = user.suburb;
      this.postcode = user.postcode;
    });
  }
}
