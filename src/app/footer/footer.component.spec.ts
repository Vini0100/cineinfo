import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of movies', () => {
    const listItems = fixture.debugElement.queryAll(By.css('ul li'));
    expect(listItems.length).toBe(component.movies.length);
  });

  it('should call movieClick method when a movie is clicked', () => {
    spyOn(component, 'movieClick');

    const listItems = fixture.debugElement.queryAll(By.css('ul li'));
    listItems[0].nativeElement.click();

    expect(component.movieClick).toHaveBeenCalledWith(component.movies[0]);
  });

  it('should render movie titles correctly', () => {
    const listItems = fixture.debugElement.queryAll(By.css('ul li'));
    listItems.forEach((item, index) => {
      expect(item.nativeElement.textContent.trim()).toBe(
        component.movies[index]
      );
    });
  });
});
