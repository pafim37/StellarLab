import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    console.log("Hello from HomeComponent");
    this.route.events.subscribe((event) => {
      console.log("Router event:", event);
    });
    let name : string = localStorage.getItem('name') ?? "no name";
    console.log(name);
  }

  name = '';

  onSubmit(): void {
    console.log('Form submitted');
    console.log('Name:', this.name);
    localStorage.setItem('name', this.name);
  }
}