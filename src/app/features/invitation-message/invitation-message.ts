import { Component,AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(
  ScrollTrigger
);

@Component({
  imports: [],
  standalone:true,
  selector: 'app-invitation-message',
  styleUrl: './invitation-message.scss',
  templateUrl: './invitation-message.html',
})
export class InvitationMessage implements AfterViewInit{


ngAfterViewInit() {

  gsap.fromTo(

'.quote-block',

{
  opacity:0,
  y:40
},

{
  opacity:1,
  y:0,
  duration:1,

  scrollTrigger:{
    trigger:'.quote-block',
    start:'top 85%'
  }

}

);

}
}
