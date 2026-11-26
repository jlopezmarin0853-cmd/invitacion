import {
  AfterViewInit,
  Component
} from '@angular/core';

import { gsap } from 'gsap';

import { AppState }
from '../../core/services/app-state';

@Component({
  selector: 'app-splash-envelope',
  standalone: true,
  templateUrl: './splash-envelope.html',
  styleUrls: [
    './splash-envelope.scss'
  ]
})
export class SplashEnvelope
implements AfterViewInit {

  constructor(
    private state: AppState
  ) {}

  ngAfterViewInit(): void {
    // Reservado para futuras animaciones
  }

  openEnvelope(): void {

    const isMobile =
      window.innerWidth < 768;

    const cardDistance =
      isMobile ? -260 : -420;

    const tl =
      gsap.timeline();

    tl.to(
      '.seal',
      {
        scale: 1.2,
        duration: .3
      }
    )

    .to(
      '.seal',
      {
        scale: 0,
        opacity: 0,
        duration: .4
      }
    )

    .to(
      '.flap',
      {
        rotationX: -180,
        opacity: 0,
        duration: 1,
        transformOrigin:
          'top center',
        ease: 'power3.inOut'
      }
    )

    .call(() => {

      const slot =
        document.querySelector(
          '.card-slot'
        ) as HTMLElement;

      if (slot) {
        slot.style.overflow =
          'visible';
      }

    })

    .to(
      '.invitation-card',
      {
        opacity: 1,
        duration: .1
      }
    )

    .to(
      '.invitation-card',
      {
        y: cardDistance,
        duration: isMobile
          ? 1.3
          : 2,

        ease: 'power4.out'
      }
    )

    .to(
      '.invitation-card',
      {
        scale: 1.05,
        rotationX: 2,
        duration: .6
      }
    )

    .to(
      '.card-monogram, .invitation-card h2, .invitation-card p, .card-divider',
      {
        opacity: 1,
        stagger: isMobile
          ? .05
          : .15,
        duration: .4
      }
    )

    .to(
      '.invitation-card',
      {
        scale: 1.08,

        rotationX: 4,

        boxShadow:
          '0 45px 90px rgba(0,0,0,.25)',

        duration: .8
      }
    )

    .to(
      '.luxury-splash',
      {
        opacity: 0,

        duration: .8,

        onComplete: () => {

          document
    .querySelector('.luxury-splash')
    ?.classList.add('hidden');

          this.state.hideSplash();

          localStorage.setItem(
            'music-playing',
            'true'
          );

        }
      }
    );

    try {

      const audio =
        new Audio(
          'music/TU-POETA.mp3'
        );

      audio.play();

    } catch (e) {

      console.error(
        'Error reproduciendo audio',
        e
      );

    }

  }



}
