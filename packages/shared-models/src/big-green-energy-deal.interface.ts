export interface BigGreenEnergyDeal {
  readonly name: string;
  readonly supplierName: string;
  readonly annualCost: number;
  readonly isGreenEnergy: true;
  readonly durationMonths?: number;
  readonly logo: string;
}
