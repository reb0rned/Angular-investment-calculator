import { Component, signal } from '@angular/core';
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
  initialInv = signal('')
  annualInv = signal('')
  returnInv = signal('')
  durationInv = signal('')

  constructor(private calculatorService: CalculatorService) {}

  onSubmit() {
    this.calculatorService.annualInvestmentCounter(
      +this.initialInv(),
      +this.annualInv(),
      +this.returnInv(),
      +this.durationInv()
      )

      this.initialInv.set('')
      this.annualInv.set('')
      this.returnInv.set('')
      this.durationInv.set('')
  }
}
