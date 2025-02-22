export type TRadioOption = {
  id: string;
  name: string;
};

export interface IRadioProps {
  label: string;
  options: TRadioOption[];
  onChange: (_: TRadioOption['id']) => void;
  className?: string;
}
