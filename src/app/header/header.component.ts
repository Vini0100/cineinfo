import { Component } from '@angular/core';
import { LogotypeComponent } from '../logotype/logotype.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogotypeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logotype = {
    src: '/icons/logotype.svg',
    alt: 'Logotype',
  };
}
