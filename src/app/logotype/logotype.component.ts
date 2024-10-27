import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logotype',
  standalone: true,
  imports: [],
  templateUrl: './logotype.component.html',
  styleUrl: './logotype.component.scss',
})
export class LogotypeComponent {
  logotype = {
    src: '/icons/logotype.svg',
    alt: 'Logotype',
  };

  constructor() {}

  @Input()
  title: string = 'CineInfo';
}
