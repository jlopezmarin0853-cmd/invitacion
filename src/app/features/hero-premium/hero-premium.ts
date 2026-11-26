import {
  AfterViewInit,
  Component
} from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-hero-premium',
  standalone: true,
  templateUrl: './hero-premium.html',
  styleUrl: './hero-premium.scss'
})
export class HeroPremiumComponent implements AfterViewInit {


  ngAfterViewInit(): void {

    const tl = gsap.timeline();

    tl.fromTo(
      '.monogram',
      {
        scale: .5,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5
      }
    )

    .fromTo(
      '#coupleName',
      {
        y: 80,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1
      }
    )

    .fromTo(
      '#weddingDate',
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1
      }
    );

    this.initParallax();

  }

  private initParallax(): void {

    window.addEventListener(
      'scroll',
      () => {

        const hero =
          document.querySelector('.hero') as HTMLElement;

        if (!hero) {
          return;
        }

        const offset = window.scrollY;

        hero.style.backgroundPositionY =
          `${offset * 0.4}px`;

      }
    );

  }



}

