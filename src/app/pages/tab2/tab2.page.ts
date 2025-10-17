import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
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
  IonCard,
  IonCardContent,
} from '@ionic/angular/standalone';
import type { Animation } from '@ionic/angular/standalone';
import { AnimationController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenuButton,
    IonIcon,
    IonButton,
    IonCard,
    IonCardContent,
  ],
})
export class Tab2Page implements OnInit, AfterViewInit {
  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;
  private animation!: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .delay(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.5' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);
  }

  play() {
    if (this.animation) {
      this.animation.play();
    }
  }
}
