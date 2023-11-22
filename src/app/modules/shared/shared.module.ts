import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavHeaderComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [MaterialModule, NavHeaderComponent],
})
export class SharedModule {}
