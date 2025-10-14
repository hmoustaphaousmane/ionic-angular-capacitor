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
  ],
})
export class ListPage implements OnInit {
  users: any[] = [];
  loading: boolean = true;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // this.getUsers();
  }

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

  clearList() {}
}
