import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AboutComponent,
    ContactUsComponent,
    HomeComponent,
    OurServicesComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, GoogleMapsModule],
  exports: [],
})
export class MainModule {}
