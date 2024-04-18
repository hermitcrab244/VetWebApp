import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/main/components/home/home.component';
import { AboutComponent } from './modules/main/components/about/about.component';
import { ContactUsComponent } from './modules/main/components/contact-us/contact-us.component';
import { OurServicesComponent } from './modules/main/components/our-services/our-services.component';
import { RegistrationComponent } from './modules/auth/components/registration/registration.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { PetsComponent } from './modules/account/components/pets/pets.component';
import { BookComponent } from './modules/account/components/book/book.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'account', component: AccountComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'book', component: BookComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
