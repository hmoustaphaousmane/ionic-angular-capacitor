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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
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
  ],
})
export class SettingsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
