export interface IQuantitySelectorProps {
  defaultQuantity?: number;
  max: number;
  onChange?: (_: number) => void;
}
