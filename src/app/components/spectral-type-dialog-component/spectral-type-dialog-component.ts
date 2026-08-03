import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';

export interface SpectralType {
  letter: string;
  name: string;
  color: string;
  temperature: string;
  description: string;
  examples: string;
}

@Component({
  selector: 'app-spectral-type-dialog-component',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './spectral-type-dialog-component.html',
  styleUrls: ['./spectral-type-dialog-component.css'],
})
export class SpectralTypeDialogComponent {
  protected readonly data = inject<SpectralType>(MAT_DIALOG_DATA);
}
