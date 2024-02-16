import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [NavHeaderComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, RouterModule, AuthModule],
  exports: [MaterialModule, NavHeaderComponent, FooterComponent],
})
export class SharedModule {}
