import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  mapCentre: google.maps.LatLngLiteral = {
    lat: -34.9208869934082,
    lng: 138.6080322265625,
  };
}
