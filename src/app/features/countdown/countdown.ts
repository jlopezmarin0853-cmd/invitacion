import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { environment } from '../../../environments/environment';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.html',
  styleUrls: ['./countdown.scss']
})
export class CountdownComponent
implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  private timerId?: number;

  weddingDate = new Date(
    environment.weddingDate
  );

  ngOnInit(): void {

    this.calculate();

    this.timerId = window.setInterval(() => {

      this.calculate();

    }, 1000);

  }

  ngAfterViewInit(): void {

    gsap.from(
      '.time-item',
      {
        opacity: 0,
        y: 40,
        stagger: .12,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.countdown-section',
          start: 'top 80%'
        }
      }
    );

  }

  private calculate(): void {

    const now = Date.now();

    const distance =
      this.weddingDate.getTime() - now;

    if (distance <= 0) {

      this.countdown = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

      this.cdr.detectChanges();

      return;
    }

    this.countdown = {

      days: Math.floor(
        distance / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
      ),

      minutes: Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
      ),

      seconds: Math.floor(
        (distance % (1000 * 60))
        / 1000
      )

    };

    gsap.fromTo(

'.time-value',

{
  y:-8,
  opacity:.8
},

{
  y:0,
  opacity:1,
  duration:.25,
  ease:'power1.out'
}

);


    this.cdr.detectChanges();

  }

  ngOnDestroy(): void {

    if (this.timerId) {
      clearInterval(this.timerId);
    }

  }

}
