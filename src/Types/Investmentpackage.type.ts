export interface INvestmentPackage {
  id: number;
  max_amount: number;
  min_amount: number;
  name: string;
  roi_pen: number;
  terminate_pen: number;
  contract_period: number;
  location: Array<number>;
  is_expired: boolean;
}
