import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  functionString: string = '';
  xValue: number = 0;
  hValue: number = 0.01;
  derivativeResult: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  calculateDerivative() {
    console.log("stop")
  }
}
