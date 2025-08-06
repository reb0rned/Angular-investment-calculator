import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  initialInv = ''
  annualInv = ''
  returnInv = ''
  durationInv = ''

  constructor(private calculatorService: CalculatorService) {

  }

  onSubmit() {
    return this.calculatorService.annualInvestmentCounter(+this.initialInv, +this.annualInv, +this.returnInv, +this.durationInv)
  }
}
