export interface FrontendDeal {
  readonly dealName: string;
  readonly supplierName: string;
  readonly yearlyCost: number;
  readonly isGreenEnergy: true;
  readonly durationMonths?: number;
  readonly logo: string;
}
