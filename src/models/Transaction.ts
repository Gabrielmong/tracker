import { Account } from './Account';
import { User } from './User';

export type Transaction = {
  account?: Account;
  accountId: string;
  amount: number;
  category: string;
  createdAt: Date;
  date: Date;
  description: string;
  id: string;
  title: string;
  updatedAt: Date;
  user?: User;
  userId: string;
};
