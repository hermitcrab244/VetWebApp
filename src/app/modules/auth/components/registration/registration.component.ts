import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/core/services/backendService/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  initalPetForm!: FormGroup;
  petImageForm!: FormGroup;
  imageUrl: string | ArrayBuffer | null = null;
  petImageFile: File | null = null;
  customerID!: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private api: APIService
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      suburb: ['', Validators.required],
      postcode: ['', Validators.required],
    });

    this.initalPetForm = this.formBuilder.group({
      petType: [null, Validators.required],
      petName: ['', Validators.required],
      petBreed: ['', Validators.required],
      petAge: ['', Validators.required],
      petGender: [null, Validators.required],
    });

    // this.petImageForm = this.formBuilder.group({
    //   petImage: [''],
    // });
  }

  registerCustomer() {
    if (this.registrationForm.valid) {
      const firstName = this.registrationForm.get('firstName')!.value;
      const lastName = this.registrationForm.get('lastName')!.value;
      const contactNumber = this.registrationForm.get('contactNumber')!.value;
      const email = this.registrationForm.get('email')!.value;
      const password = this.registrationForm.get('password')!.value;
      const suburb = this.registrationForm.get('suburb')!.value;
      const postcode = this.registrationForm.get('postcode')!.value;

      this.api
        .registerCustomer(
          firstName,
          lastName,
          contactNumber,
          email,
          suburb,
          postcode,
          password
        )
        .subscribe(
          (response) => {
            console.log(response.message);
            this.customerID = response.customerID;
            console.log('Customer ID: ', this.customerID);
          },
          (error) => {
            console.log('Error: ', error);
          }
        );
    }
  }

  registerPet() {
    if (this.initalPetForm.valid && this.customerID) {
      const petType = this.initalPetForm.get('petType')!.value;
      const petName = this.initalPetForm.get('petName')!.value;
      const petBreed = this.initalPetForm.get('petBreed')!.value;
      const petAge = this.initalPetForm.get('petAge')!.value;
      const petGender = this.initalPetForm.get('petGender')!.value;

      this.api
        .registerPet(
          this.customerID,
          petType,
          petName,
          petBreed,
          petAge,
          petGender
        )
        .subscribe(
          (response) => {
            console.log(response.message);
          },
          (error) => {
            console.log('Error: ', error);
          }
        );
    }
  }

  // uploadPetImage() {}

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.petImageFile = file;
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.imageUrl = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  returnHome() {
    this.router.navigate(['/home']);
  }
}
