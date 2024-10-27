import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss',
})
export class MovieSearchComponent implements OnInit {
  //@ts-ignore
  formSearch: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formSearch = this.fb.group({
      searchInput: [''],
    });
  }

  onSubmit(): void {
    if (this.formSearch) {
      const movie = this.formSearch.value.searchInput;
      this.route.navigate([`/movie/${movie}`]);
    }
  }

  reset(): void {
    this.initForm();
    this.route.navigate(['/']);
  }
}
