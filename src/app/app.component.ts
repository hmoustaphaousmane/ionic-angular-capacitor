import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  logInOutline,
  logOutOutline,
  personCircleOutline,
  checkmarkDoneOutline,
  triangle,
  ellipse,
  trashBinOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      logInOutline,
      logOutOutline,
      personCircleOutline,
      checkmarkDoneOutline,
      triangle,
      ellipse,
      trashBinOutline,
    });
  }
}
