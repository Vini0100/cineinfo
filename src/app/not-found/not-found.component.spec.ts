import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { By } from '@angular/platform-browser';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement.nativeElement.textContent).toContain('404');
  });

  it('should display the correct subtitle', () => {
    const subtitleElement = fixture.debugElement.query(By.css('h2'));
    expect(subtitleElement.nativeElement.textContent).toContain(
      'Movie title not found'
    );
  });

  it('should display the correct message', () => {
    const messageElement = fixture.debugElement.query(By.css('p'));
    expect(messageElement.nativeElement.textContent).toContain(
      'The movie you are looking for was not found, please try again.'
    );
  });
});
