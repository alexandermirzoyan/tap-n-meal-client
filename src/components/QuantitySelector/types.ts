export interface IQuantitySelectorProps {
  currentQuantity?: number;
  max: number;
  onChange?: (_: number) => void;
}
