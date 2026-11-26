import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OliveBackground } from './olive-background';

describe('OliveBackground', () => {
  let component: OliveBackground;
  let fixture: ComponentFixture<OliveBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OliveBackground],
    }).compileComponents();

    fixture = TestBed.createComponent(OliveBackground);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
