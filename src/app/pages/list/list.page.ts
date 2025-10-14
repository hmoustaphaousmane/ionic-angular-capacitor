import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonAvatar,
  IonChip,
  AlertController,
  ToastController,
  IonRefresher,
  IonRefresherContent,
  IonSkeletonText,
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonMenuButton,
    CommonModule,
    FormsModule,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonAvatar,
    IonChip,
    IonRefresher,
    IonRefresherContent,
    IonSkeletonText,
  ],
})
export class ListPage implements OnInit {
  users: any[] = [];
  loading: boolean = true;
  items: any[] = [...Array(10)];

  constructor(
    private httpClient: HttpClient,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.getUsers().subscribe((data) => {
      this.users = data.results;
      console.log(
        '🚀 ~ file: list.page.ts:44 ! ionViewWillEnter ~ users',
        this.users
      );
      this.loading = false;
    });
  }

  getUsers(): Observable<any> {
    return this.httpClient.get('https://randomuser.me/api?results=10').pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }

  clearList() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete all users?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.users = [];
            this.showToast('All users deleted', 'danger');
          },
        },
      ],
    });

    await alert.present();
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      position: 'bottom',
      color,
    });
    await toast.present();
  }

  doRefresh(event: any) {
    this.getUsers().subscribe((data) => {
      this.users = data.results;
      console.log(
        '🚀 ~ file: list.page.ts:127 ! doRefresh ~ refreshed users',
        this.users
      );
      event.target.complete(); // ends refresher animation
    });
  }
}
