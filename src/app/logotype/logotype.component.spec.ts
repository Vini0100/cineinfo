import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogotypeComponent } from './logotype.component';

describe('LogotypeComponent', () => {
  let component: LogotypeComponent;
  let fixture: ComponentFixture<LogotypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogotypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogotypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the image and title', () => {
    const logotypeImg = fixture.nativeElement.querySelector('img.logotype');
    expect(logotypeImg).toBeTruthy();

    const title = fixture.nativeElement.textContent.trim();
    expect(title).toContain('Cineinfo');
  });
});
