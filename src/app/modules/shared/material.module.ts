import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
})
export class MaterialModule {}
