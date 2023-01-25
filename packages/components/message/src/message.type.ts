type Itype = 'success' | 'info' | 'error' | 'warning';

export interface IMessageProps {
  ID?: string;
  message?: string;
  type?: Itype;
  duration?: number;
  center?: boolean;
  onclose?: () => void;
  offset?: number;
}

export type IMessageOptions = IMessageProps | string;
