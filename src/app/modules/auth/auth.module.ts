import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [
    CommonModule, RouterModule, MaterialModule, ReactiveFormsModule
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
