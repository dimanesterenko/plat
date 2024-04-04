import { Injectable } from '@angular/core';

interface SupportedFunctions {
  'x^2': (x: number) => number;
  'x^3': (x: number) => number;
  'sin(x)': (x: number) => number;
}

@Injectable({
  providedIn: 'root'
})
export class DerivativeService {

  constructor() { }

  functions: SupportedFunctions = {
    'x^2': (x: number) => x * x,
    'x^3': (x: number) => Math.pow(x, 3),
    'sin(x)': (x: number) => Math.sin(x)
  };


  calculateDerivative(func: keyof SupportedFunctions, x0: number, h: number): number {
    const functionToDifferentiate = this.functions[func];
    const derivative = (functionToDifferentiate(x0 + h) - functionToDifferentiate(x0 - h)) / (2 * h);
    return derivative;
  }
}
