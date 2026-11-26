import { Component } from '@angular/core';
import { Hero }
  from '../../features/hero/hero';

import { SplashEnvelope }
  from '../../features/splash-envelope/splash-envelope';
import {
  CountdownComponent
}
  from
  '../../features/countdown/countdown';

import {
  GalleryComponent
}
  from
  '../../features/gallery/gallery';

import {
  TimelineComponent
}
  from
  '../../features/timeline/timeline';
import {
  HeroPremiumComponent
}
  from
  '../../features/hero-premium/hero-premium';
import {
  OliveBackground
}
  from
  '../../features/olive-background/olive-background';

import {
  MusicPlayerComponent
}
  from
  '../../features/music-player/music-player';

  import {
LocationComponent
}
from '../../features/location/location';

import { Rsvp } from '../../features/rsvp/rsvp';

import {
FooterPremiumComponent
}
from
'../../features/footer-premium/footer-premium';

import {
InvitationMessage
}
from '../../features/invitation-message/invitation-message';


@Component({
  imports: [ CountdownComponent, GalleryComponent,
    HeroPremiumComponent, OliveBackground,
    LocationComponent, TimelineComponent,
    SplashEnvelope, MusicPlayerComponent,
    Rsvp, FooterPremiumComponent,InvitationMessage],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home { }
