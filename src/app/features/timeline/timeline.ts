import {
  AfterViewInit,
  Component
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { gsap } from 'gsap';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './timeline.html',
  styleUrls: [
    './timeline.scss'
  ]
})
export class TimelineComponent
implements AfterViewInit {

  timeline = [

    {
      year: '2019',
      title: 'Nos conocimos',
      image: 'history/primera-foto.jpeg',
      description:
        'Una casualidad que cambió nuestras vidas.'
    },

    {
      year: '2024',
      title: 'Promesa',
      image: 'history/promesa.jpeg',
      description:
        'Un sí para toda la vida.'
    },

    {
      year: '2024',
      title: 'Compromiso',
      image: 'history/pedida.jpeg',
      description:
        'Un sí para toda la vida.'
    },

    {
      year: '2026',
      title: 'Nuestra Boda',
      image: 'history/foto1.jpeg',
      description:
        'El comienzo de un nuevo capítulo.'
    }

  ];

  ngAfterViewInit(): void {

    setTimeout(() => {

      gsap.fromTo(

        '.story-card',

        {
          opacity: 0,
          y: 60
        },

        {
          opacity: 1,
          y: 0,

          duration: 1,

          stagger: .2,

          ease: 'power2.out'

        }

      );

    }, 100);

  }

}
