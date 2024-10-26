import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogotypeComponent } from './logotype.component';
import { By } from '@angular/platform-browser';

describe('LogotypeComponent', () => {
  let component: LogotypeComponent;
  let fixture: ComponentFixture<LogotypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogotypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogotypeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the image', () => {
    const logotypeImg = fixture.nativeElement.querySelector('img.logotype');
    expect(logotypeImg).toBeDefined();
  });

  it('should contain the title', () => {
    component.title = 'test';
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('#title'));
    expect(titleElement).toBeTruthy();

    expect((titleElement.nativeElement as HTMLSpanElement).textContent).toEqual(
      'test'
    );
  });
});
