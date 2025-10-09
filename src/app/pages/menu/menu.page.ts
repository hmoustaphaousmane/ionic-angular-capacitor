import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonRouterOutlet,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';
import { homeOutline, newspaperOutline } from 'ionicons/icons';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonLabel,
    IonItem,
    IonRouterOutlet,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonMenu,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MenuPage implements OnInit {
  paths = [
    { name: 'Home', url: '/app/list', icon: homeOutline },
    { name: 'Settings', url: '/app/settings', icon: newspaperOutline },
  ];

  constructor() {}

  ngOnInit() {
  }

}
