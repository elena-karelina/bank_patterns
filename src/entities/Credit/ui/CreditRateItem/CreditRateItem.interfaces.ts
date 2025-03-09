import { FieldType } from "@features/CreditCalculation";

export interface ICreditRateItemProps {
  name: string;
  rate: number;
  id: string;
  formData: FieldType | undefined;
}
