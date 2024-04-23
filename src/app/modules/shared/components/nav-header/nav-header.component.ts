import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SettingsService } from 'src/app/core/services/dataService/settings.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent implements OnDestroy {
  fontSizeSelect!: string;
  isLoggedIn: boolean = false;
  private subscription: Subscription;
  notificationCount: number = 0;

  constructor(private settingsService: SettingsService) {
    this.subscription = this.settingsService
      .getIsLoggedIn()
      .subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      });

    this.subscription = this.settingsService
      .getInviteNotifications()
      .subscribe((invitations) => {
        this.notificationCount = invitations.length;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  fontSizeSettings(fontSize: string) {
    this.fontSizeSelect = fontSize;
    this.settingsService.setFontSize(this.fontSizeSelect);
  }
}
