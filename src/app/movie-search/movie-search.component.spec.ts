import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchComponent } from './movie-search.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;
  let router: Router;

  beforeEach(async () => {
    const routerMock = {
      navigate: jasmine.createSpy('navigate'),
    };

    await TestBed.configureTestingModule({
      imports: [MovieSearchComponent],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form on ngOnInit', () => {
    expect(component.formSearch).toBeDefined();
    expect(component.formSearch.get('searchInput')?.value).toBe('');
  });

  it('should display the correct input placeholder', () => {
    const inputElement = fixture.debugElement.query(
      By.css('input[formControlName="searchInput"]')
    );
    expect(inputElement.nativeElement.placeholder).toBe('Type a movie title');
  });

  it('should navigate to the movie route on form submission', () => {
    component.formSearch.patchValue({ searchInput: 'Inception' });
    component.onSubmit();

    expect(router.navigate).toHaveBeenCalledWith(['/movie/Inception']);
  });

  it('should reset the form and navigate to the home route', () => {
    component.reset();

    expect(component.formSearch.get('searchInput')?.value).toBe('');
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
