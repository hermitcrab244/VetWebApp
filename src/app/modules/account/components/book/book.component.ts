import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/backendService/api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit {
  dogs: any[] = [];
  filteredDogs: any[] = [];
  selectedName: string | null = null;
  selectedBreed: string | null = null;
  selectedGender: string | null = null;
  selectedAge: number | null = null;
  selectedDogsCount: number = 0;

  constructor(private api: APIService) {}

  ngOnInit() {
    this.retrieveAllDogsList();
  }

  retrieveAllDogsList() {
    const petType = 'Dog';
    this.api.retrieveDogsList(petType).subscribe((response: any) => {
      if (response) {
        this.dogs = response.dogs.map((dog: any) => ({
          petName: dog.pet_name,
          petType: dog.pet_type,
          petBreed: dog.pet_breed,
          petAge: dog.pet_age,
          petGender: dog.pet_sex,
        }));
        this.filteredDogs = this.dogs;
        console.log(this.dogs);
      } else {
        console.log('Response does not contain an array of pets:', response);
      }
    });
  }

  filterDogs() {
    this.filteredDogs = this.dogs.filter(
      (dog) =>
        (!this.selectedName ||
          dog.petName
            .toLowerCase()
            .includes(this.selectedName.toLowerCase())) &&
        (!this.selectedBreed ||
          dog.petBreed
            .toLowerCase()
            .includes(this.selectedBreed.toLowerCase())) &&
        (!this.selectedGender || dog.petGender === this.selectedGender) &&
        (!this.selectedAge || dog.petAge === this.selectedAge)
    );
  }

  updateSelectedDogsCount() {
    this.selectedDogsCount = this.dogs.filter((dog) => dog.selected).length;
  }
}
