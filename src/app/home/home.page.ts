import { Component,Output,EventEmitter, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})

export class HomePage {
  constructor() {}
  x0!: number;
  h!: number;
  selectedFunction!: string;

  @Output() calculate = new EventEmitter<{x0: number, h: number, selectedFunction: string}>();
}

