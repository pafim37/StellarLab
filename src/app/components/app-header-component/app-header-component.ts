import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './app-header-component.html',
  styleUrls: ['./app-header-component.css'],
})
export class AppHeaderComponent {}
