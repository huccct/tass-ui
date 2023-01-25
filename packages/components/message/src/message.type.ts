type Itype = 'success' | 'info' | 'error' | 'warning';

export interface IMessageProps {
  id?: string;
  message?: string;
  type?: Itype;
  duration?: number;
  center?: boolean;
  onclose?: () => void;
  offset?: number;
}

// a little bug wait you to change
export type IMessageOptions = IMessageProps | string | any;
