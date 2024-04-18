import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/backendService/api.service';
import { SettingsService } from 'src/app/core/services/dataService/settings.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss',
})
export class PetsComponent implements OnInit {
  pets: any[] = [];
  customerID: string = '';

  constructor(
    private api: APIService,
    private settingService: SettingsService
  ) {}

  ngOnInit() {
    this.retrievePets();
  }

  retrievePets() {
    this.customerID = this.settingService.customerID;
    this.api.retrievePets(this.customerID).subscribe(
      (response: any) => {
        if (response && Array.isArray(response.pets)) {
          this.pets = response.pets.map((pet: any) => ({
            petName: pet.pet_name,
            petType: pet.pet_type,
            petBreed: pet.pet_breed,
            petAge: pet.pet_age,
            petGender: pet.pet_sex,
          }));
          console.log(this.pets);
        } else {
          console.log('Response does not contain an array of pets:', response);
        }
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }
}
