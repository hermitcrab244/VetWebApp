import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SettingsService } from 'src/app/core/services/dataService/settings.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  fontSizeSelect!: string;
  isLoggedIn: boolean = false;
  private subscription: Subscription;

  constructor(private settingsService: SettingsService) {
    this.subscription = this.settingsService
      .getIsLoggedIn()
      .subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      });
  }

  fontSizeSettings(fontSize: string) {
    this.fontSizeSelect = fontSize;
    this.settingsService.setFontSize(this.fontSizeSelect);
  }
}
