import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

import { IntroComponent } from '../../components/intro/intro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonFooter,
    IonCard,
    IonCardContent,
    IonInput,
    IonButton,
    RouterLink,
    IonIcon,
    IntroComponent,
  ],
})
export class LoginPage implements OnInit {
  introSeen = true;
  INTRO_KEY = 'intro-seen';

  constructor() {}

  ngOnInit() {
    this.checkStorage();
  }

  async checkStorage() {
    const seen = await Preferences.get({ key: this.INTRO_KEY });
    console.log('🚀 ~ file: login.page.ts:51 ~ checkStorage ~ seen:', seen);
    this.introSeen = seen.value === 'true';
  }

  doLogin() {
    console.log('doLogin');
  }

  onFinish() {
    console.log('onFinish');
    this.introSeen = true;
    Preferences.set({ key: this.INTRO_KEY, value: 'true' });
  }

  seeIntroAgain = () => {
    this.introSeen = false;
    Preferences.remove({ key: this.INTRO_KEY });
  };
}
