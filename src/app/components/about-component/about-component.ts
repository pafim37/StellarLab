import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  SpectralType,
  SpectralTypeDialogComponent,
} from '../spectral-type-dialog-component/spectral-type-dialog-component';

const SPECTRAL_TYPES: SpectralType[] = [
  {
    letter: 'O',
    name: 'Blue stars',
    color: '#9bbcff',
    temperature: '30,000 K+',
    description: 'The hottest, most massive, and rarest main-sequence stars. They burn fuel quickly and shine with intense blue-white light.',
    examples: 'Examples: Alnitak, Zeta Puppis',
  },
  {
    letter: 'B',
    name: 'Blue-white stars',
    color: '#aabfff',
    temperature: '10,000-30,000 K',
    description: 'Very luminous stars with a cool-toned blue-white color. Many bright naked-eye stars belong to this class.',
    examples: 'Examples: Rigel, Spica',
  },
  {
    letter: 'A',
    name: 'White stars',
    color: '#cad7ff',
    temperature: '7,500-10,000 K',
    description: 'Bright white stars with strong hydrogen lines in their spectra. They are common among the brightest stars in the sky.',
    examples: 'Examples: Sirius, Vega',
  },
  {
    letter: 'F',
    name: 'Yellow-white stars',
    color: '#f8f7ff',
    temperature: '6,000-7,500 K',
    description: 'Warm stars between white A-type stars and yellow G-type stars. They often appear soft white with a slight warm tint.',
    examples: 'Examples: Procyon, Canopus',
  },
  {
    letter: 'G',
    name: 'Yellow stars',
    color: '#fff4b8',
    temperature: '5,200-6,000 K',
    description: 'Sun-like stars with a yellow-white color. They are stable, long-lived, and familiar from our own Solar System.',
    examples: 'Examples: Sun, Alpha Centauri A',
  },
  {
    letter: 'K',
    name: 'Orange stars',
    color: '#ffd08a',
    temperature: '3,700-5,200 K',
    description: 'Cooler orange stars. They are abundant and can live much longer than hotter blue and white stars.',
    examples: 'Examples: Arcturus, Aldebaran',
  },
  {
    letter: 'M',
    name: 'Red stars',
    color: '#ff9a76',
    temperature: '2,400-3,700 K',
    description: 'The coolest common spectral class. It includes many red dwarfs and red giants with deep orange-red light.',
    examples: 'Examples: Betelgeuse, Proxima Centauri',
  },
];

@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './about-component.html',
  styleUrls: ['./about-component.css'],
})
export class AboutComponent {
  private readonly dialog = inject(MatDialog);

  protected readonly spectralTypes = SPECTRAL_TYPES;

  protected openSpectralType(type: SpectralType): void {
    this.dialog.open(SpectralTypeDialogComponent, {
      data: type,
      width: '420px',
      maxWidth: 'calc(100vw - 32px)',
    });
  }
}
