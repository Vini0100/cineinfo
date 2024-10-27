import { Component } from '@angular/core';
import { LogotypeComponent } from '../logotype/logotype.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogotypeComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  movies = [
    'Interstellar',
    'Indiana Jones',
    'Jurassic park',
    'Transformers',
    'The Lord of the Rings',
  ];

  constructor(private route: Router) {}

  movieClick(movie: string): void {
    this.route.navigate([`/movie/${movie}`]);
  }
}
