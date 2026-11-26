import {
  Component,
  AfterViewInit
} from '@angular/core';

import { CommonModule }
  from '@angular/common';

import {
  DomSanitizer,
  SafeResourceUrl
}
  from '@angular/platform-browser';

import { gsap }
  from 'gsap';

import {
  ScrollTrigger
}
  from 'gsap/ScrollTrigger';

gsap.registerPlugin(
  ScrollTrigger
);


@Component({
  selector:'app-location',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./location.html',
  styleUrls:['./location.scss']
})
export class LocationComponent
implements AfterViewInit {

  mapUrl: SafeResourceUrl;

  constructor(
    private sanitizer:
    DomSanitizer
  ){

    this.mapUrl =
    this.sanitizer
    .bypassSecurityTrustResourceUrl(

      'https://www.google.com/maps?q=16.673495,-94.774283&z=15&output=embed'
    );

  }

  ngAfterViewInit(): void {

  gsap.from(

    '.event-card',

    {

      opacity: 1,

      y: 80,

      stagger: .2,

      duration: 1,

      ease: 'power3.out',

      scrollTrigger: {

        trigger: '.location-section',

        start: 'top 80%'

      }

    }

  );

  gsap.from(

    '.map-wrapper',

    {

      opacity: 0,

      y: 60,

      duration: 1,

      delay: .4,

      ease: 'power2.out',

      scrollTrigger: {

        trigger: '.map-wrapper',

        start: 'top 85%'

      }

    }

  );

}

}
