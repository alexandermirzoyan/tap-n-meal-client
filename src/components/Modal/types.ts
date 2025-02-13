export interface IModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  info: string;
  type?: 'success' | 'error';
}
