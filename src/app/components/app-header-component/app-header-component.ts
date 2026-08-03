import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterLink, MatToolbar, MatButton, MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './app-header-component.html',
  styleUrls: ['./app-header-component.css'],
})
export class AppHeaderComponent {
  protected readonly themeMode = signal<'light' | 'dark'>('light');

  protected setThemeMode(mode: 'light' | 'dark'): void {
    this.themeMode.set(mode);
    document.body.classList.toggle('dark-mode', mode === 'dark');
  }
}
