import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterPremium } from './footer-premium';

describe('FooterPremium', () => {
  let component: FooterPremium;
  let fixture: ComponentFixture<FooterPremium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterPremium],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterPremium);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
