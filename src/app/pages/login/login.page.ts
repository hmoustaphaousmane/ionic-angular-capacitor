import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonCard, IonCardContent, IonInput, IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import {
  NavController,
  LoadingController,
  ToastController,
} from '@ionic/angular';

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
    IonGrid,
    IonRow,
    IonCol
],
})
export class LoginPage implements OnInit {
  introSeen = true;
  INTRO_KEY = 'intro-seen';

  constructor(
    private navCtr: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.checkStorage();
  }

  async checkStorage() {
    const seen = await Preferences.get({ key: this.INTRO_KEY });
    console.log('🚀 ~ file: login.page.ts:51 ~ checkStorage ~ seen:', seen);
    this.introSeen = seen.value === 'true';
  }

  async doLogin() {
    // create loading spinner
    const loading = await this.loadingCtrl.create({
      message: 'Logging in...',
      spinner: 'crescent',
    });
    await loading.present(); // present loading spinner

    try {
      console.log('doLogin');
      // simulate login (api call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // conditionally show success or error
      const loginSuccess = true; // TODO: change logic accord login status (after backend implementation)
      if (loginSuccess) {
        await this.presentToast('Connexion réussie', 'success');
        // this.router.navigate(['app']);
        this.navCtr.navigateRoot('/app');
      } else {
        await this.presentToast('Identifiants invalides', 'danger');
      }
    } catch (err) {
      console.error(err);
      await this.presentToast('Une erreur est survenue', 'warning');
    } finally {
      await loading.dismiss(); // dismiss loading spinner
    }
  }

  private async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      position: 'bottom',
      color,
    });
    await toast.present();
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
