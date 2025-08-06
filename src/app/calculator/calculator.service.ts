import { Injectable, signal } from "@angular/core";
import { AnualData, Investment } from "../types/Investment";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  annualData = signal<AnualData[]>([]);

  annualInvestmentCounter(initialInv: number, annualInv: number, returnInv: number, durationInv: number) {
    const result: AnualData[] = [];
    let investmentValue = initialInv;
    let totalInvested = initialInv;

    for (let i = 0; i < durationInv; i++) {
      const interestEarnedInYear = investmentValue * (returnInv / 100);
      investmentValue += interestEarnedInYear + annualInv;
      totalInvested += annualInv;

      const yearData: AnualData = {
        year: i + 1,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInv,
        totalInterest: investmentValue - totalInvested,
        totalAmountInvested: totalInvested
      };

      result.push(yearData);
    }

    this.annualData.set(result);
  }
}
