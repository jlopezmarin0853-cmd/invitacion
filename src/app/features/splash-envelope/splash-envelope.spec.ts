import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashEnvelope } from './splash-envelope';

describe('SplashEnvelope', () => {
  let component: SplashEnvelope;
  let fixture: ComponentFixture<SplashEnvelope>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplashEnvelope],
    }).compileComponents();

    fixture = TestBed.createComponent(SplashEnvelope);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
