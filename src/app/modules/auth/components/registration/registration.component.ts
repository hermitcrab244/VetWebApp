import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/core/services/backendService/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})

export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup
  initalPetForm!: FormGroup

  constructor(
    private router: Router, private formBuilder: FormBuilder, private api: APIService,
    ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      fistName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      suburb: ['', Validators.required],
      postcode: ['', Validators.required]
    })

    this.initalPetForm = this.formBuilder.group({
      petName: ['', Validators.required],
      petBreed: ['', Validators.required],
      petAge: ['', Validators.required],
      petGender: ['', Validators.required]
    })
  }

   registerUser() {
    if (this.registrationForm.valid && this.initalPetForm.valid) {
      const firstName = this.registrationForm.get('firstName')!.value;
      const lastName = this.registrationForm.get('lastName')!.value;
      const contactNumber = this.registrationForm.get('contactNumber')!.value;
      const email = this.registrationForm.get('email')!.value;
      const password = this.registrationForm.get('password')!.value;
      const suburb = this.registrationForm.get('suburb')!.value;
      const postcode = this.registrationForm.get('postcode')!.value;
      const petName = this.initalPetForm.get('petName')!.value;
      const petBreed = this.initalPetForm.get('petBreed')!.value;
      const petAge = this.initalPetForm.get('petAge')!.value;
      const petGender = this.initalPetForm.get('petGender')!.value;
    }
   }

  returnHome() {
    this.router.navigate(['/home']);
  }
}
