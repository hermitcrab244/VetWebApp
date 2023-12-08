import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingsService } from './core/services/gameService/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private dataSubscription: Subscription;

  title = 'VetWebsite';
  sizeSelector!: string;

  constructor(private settingsService: SettingsService) {
    this.dataSubscription = this.settingsService
      .getFontSize()
      .subscribe((data) => {
        if (!data) {
          return;
        }

        this.sizeSelector = data;
      });
  }

  ngOnInit(): void {
    this.sizeSelector = 'default';
  }
}
