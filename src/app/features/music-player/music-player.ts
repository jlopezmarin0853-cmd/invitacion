import {
  Component,
  OnInit
}
  from '@angular/core';

import { gsap }
  from 'gsap';

@Component({

  selector: 'app-music-player',

  standalone: true,

  templateUrl:
    './music-player.html',

  styleUrls: [
    './music-player.scss'
  ]

})
export class MusicPlayerComponent
  implements OnInit {

  audio!: HTMLAudioElement;

  isPlaying = false;

  ngOnInit() {

    this.audio =

      new Audio(
        'music/canon.mp3'
      );

    this.audio.loop = true;

    const stored =

      localStorage.getItem(
        'music-playing'
      );

    if (stored === 'true') {

      this.audio.play();

      this.isPlaying = true;

    }

  }

  toggleMusic() {

    if (this.audio.paused) {

      this.audio.play();

      this.isPlaying = true;

      localStorage
        .setItem(
          'music-playing',
          'true'
        );

      this.animate();

    } else {

      this.audio.pause();

      this.isPlaying = false;

      localStorage
        .setItem(
          'music-playing',
          'false'
        );

    }

  }

  private animate() {

    gsap.fromTo(

      '.music-player',

      {

        scale: .8

      },

      {

        scale: 1,

        duration: .6,

        ease: 'elastic.out'

      }

    );

  }

}
