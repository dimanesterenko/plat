import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DerivativeService } from '../derivative.service';
import { SupportedFunctions } from '../derivative.service';

export interface DerivativeResult {
  value: number; 
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {
  @Output() onCalculate: EventEmitter<DerivativeResult> = new EventEmitter<DerivativeResult>();
  constructor(private derivativeService: DerivativeService) { }

  functionString: keyof SupportedFunctions = 'x^2'; ;
  xValue: number = 0;
  hValue: number = 0.01;
  derivativeResult: number | null = null;

  ngOnInit(): void {
  }

  calculateDerivative() {
    this.derivativeResult = this.derivativeCalculation();
    const result: DerivativeResult = { value: this.derivativeResult };
    this.onCalculate.emit(result);
  }

  derivativeCalculation(): number {
    if (this.functionString in this.derivativeService.functions) {
      return this.derivativeService.calculateDerivative(this.functionString as keyof SupportedFunctions, this.xValue, this.hValue);
    } else {
      return 0;
    }
  }
}
