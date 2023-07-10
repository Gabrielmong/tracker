export interface User {
  createdAt: Date;
  email: string;
  id: string;
  lastName: string;
  name: string;
  password?: string;
  token: string;
  updatedAt: Date;
}
