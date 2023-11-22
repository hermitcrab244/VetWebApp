import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/main/components/home/home.component';
import { AboutComponent } from './modules/main/components/about/about.component';
import { ContactUsComponent } from './modules/main/components/contact-us/contact-us.component';
import { OurServicesComponent } from './modules/main/components/our-services/our-services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
