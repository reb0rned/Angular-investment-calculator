export interface Investment {
  initial: number
  annual: number
  return: number
  duration: number
}

export interface AnualData {
  year: number
  interest: number
  valueEndOfYear: number
  annualInvestment: number
  totalInterest: number
  totalAmountInvested: number
}
