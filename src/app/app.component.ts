import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { DerivativeService } from './derivative.service';
import { DerivativeResult } from './input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private derivativeService: DerivativeService) {}
  derivativeResult: number | null = null;

  receiveDerivative(result: DerivativeResult) {
    this.derivativeResult = result.value;
  }
}
