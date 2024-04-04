import { TestBed } from '@angular/core/testing';
import { DerivativeService } from './derivative.service';

describe('DerivativeService', () => {
  let service: DerivativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DerivativeService]
    });
    service = TestBed.inject(DerivativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate derivative for x^2', () => {
    const func = 'x^2';
    const x0 = 2;
    const h = 0.1;
    const expectedDerivative = 4;

    const actualDerivative = service.calculateDerivative(func, x0, h);

    expect(actualDerivative).toBeCloseTo(expectedDerivative, 4); 
  });

  it('should calculate derivative for x^3 with high accuracy', () => {
    const func = 'x^3';
    const x0 = 1;
    const h = 0.0001; 
    const expectedDerivative = 3 * x0 * x0; 
    const actualDerivative = service.calculateDerivative(func, x0, h);
    expect(actualDerivative).toBeCloseTo(expectedDerivative, 6); 
  });
  

  it('should calculate derivative for sin(x)', () => {
    const func = 'sin(x)';
    const x0 = Math.PI / 2; 
    const h = 0.001;
    const expectedDerivative = Math.cos(Math.PI / 2); 

    const actualDerivative = service.calculateDerivative(func, x0, h);

    expect(actualDerivative).toBeCloseTo(expectedDerivative, 4); 
  });

});
