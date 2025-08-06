import { Component, signal } from '@angular/core';
import { CalculatorService } from '../calculator/calculator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.css'
})
export class ResultTableComponent {
  constructor(
    private calculatorService: CalculatorService
  ) {}
    annualData = this.calculatorService.annualData
}
