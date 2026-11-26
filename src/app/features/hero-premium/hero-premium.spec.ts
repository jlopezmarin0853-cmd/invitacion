import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroPremium } from './hero-premium';

describe('HeroPremium', () => {
  let component: HeroPremium;
  let fixture: ComponentFixture<HeroPremium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroPremium],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroPremium);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
