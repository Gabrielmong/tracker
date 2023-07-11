import { Account } from './Account';
import { User } from './User';

export type Transaction = {
  account: Account;
  accountId: string;
  amount: number;
  category: string;
  createdAt: string;
  date: string;
  description: string;
  id: string;
  title: string;
  updatedAt: string;
  sentTo?: string;
  user?: User;
  userId: string;
};
