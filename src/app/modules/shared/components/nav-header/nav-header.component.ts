import { Component } from '@angular/core';
import { SettingsService } from 'src/app/core/services/dataService/settings.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  fontSizeSelect!: string;

  constructor(private settingsService: SettingsService) {}

  fontSizeSettings(fontSize: string) {
    this.fontSizeSelect = fontSize;
    this.settingsService.setFontSize(this.fontSizeSelect);
  }
}
