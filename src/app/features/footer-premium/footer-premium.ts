import {
Component,
AfterViewInit
}
from '@angular/core';

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
  selector:'app-footer-premium',
  standalone:true,
  templateUrl:
  './footer-premium.html',
  styleUrls:[
  './footer-premium.scss'
  ]
})
export class FooterPremiumComponent
implements AfterViewInit {

  ngAfterViewInit(){

    gsap.from(

      '.footer-content',

      {

        opacity:0,

        y:80,

        duration:1.2,

        scrollTrigger:{

          trigger:'.footer',

          start:'top 80%'

        }

      }

    );

  }

  goTop(){

    window.scrollTo({

      top:0,

      behavior:'smooth'

    });

  }

}
