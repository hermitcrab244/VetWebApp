import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './components/account/account.component';
import { PetsComponent } from './components/pets/pets.component';
import { BookComponent } from './components/book/book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountComponent, PetsComponent, BookComponent],
  imports: [CommonModule, SharedModule, RouterModule, FormsModule],
  exports: [],
})
export class AccountModule {}
