import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild
} from '@angular/core';

import { CommonModule } from '@angular/common';

import PhotoSwipeLightbox
from 'photoswipe/lightbox';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss']
})
export class GalleryComponent
implements AfterViewInit {
  @ViewChild('swiper')
  swiper!: ElementRef;



  photos = [

    'gallery/beso.jpeg',

    'gallery/navidad.jpeg',

    'gallery/promesa.jpeg',

    'gallery/pedida.jpeg',

    'gallery/plaza.jpeg',

    'gallery/foto2.jpeg',

    'gallery/bellasartes2.jpeg',

    'gallery/comida.jpeg',

    'gallery/fiesta.jpeg',

    'gallery/foto3.jpeg',

    'gallery/navidad4.jpeg',

    'gallery/foto1.jpeg',

    'gallery/bellasartes.jpeg',

    'gallery/navidad3.jpeg',

    'gallery/foto4.jpeg'

  ];


  ngAfterViewInit(): void {

  const swiperEl =
    this.swiper.nativeElement;

  Object.assign(swiperEl, {

    modules: [],

    slidesPerView: 1,

    loop: true,

    speed: 1200,

    grabCursor: true,

    allowTouchMove: true,

    navigation: true,

    pagination: {
      clickable: true
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }

  });

  swiperEl.initialize();

  const lightbox =
    new PhotoSwipeLightbox({

      gallery: '#gallery',

      children: 'a',

      pswpModule: () =>
        import('photoswipe')

    });

  lightbox.init();

}

test(){

  const swiper =
    this.swiper.nativeElement.swiper;

  swiper.slideNext();

}

}
