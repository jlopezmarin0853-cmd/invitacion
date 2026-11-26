import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AppState {

    splashVisible = signal(true);

    hideSplash() {
    this.splashVisible.set(false);
  }

}
