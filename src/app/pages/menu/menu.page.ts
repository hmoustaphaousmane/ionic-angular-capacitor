import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonRouterOutlet, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/angular/standalone';
import { homeOutline, newspaperOutline } from 'ionicons/icons';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

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
    IonButton
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MenuPage implements OnInit {
  pageTitle = 'Menu';
  paths = [
    { name: 'Home', url: '/app/list', icon: homeOutline },
    { name: 'Settings', url: '/app/settings', icon: newspaperOutline },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // set page title dynamically
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/list')) this.pageTitle = 'List';
        else if (event.url.includes('/settings')) {
          if (event.url.includes('/tab1')) this.pageTitle = 'Tab 1';
          else if (event.url.includes('/tab2')) this.pageTitle = 'Tab 2';
          else this.pageTitle = 'Settings';
        } else this.pageTitle = 'Menu';
      }
    });
  }
}
