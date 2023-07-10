import { gql } from '@apollo/client';

export const ACCOUNT_ADDED = gql`
  subscription AccountAdded($userId: String) {
    accountAdded(userId: $userId) {
      balance
      bank
      createdAt
      currency
      id
      name
      number
      type
      updatedAt
    }
  }
`;

export const ACCOUNT_DELETED = gql`
  subscription AccountDeleted($userId: String) {
    accountDeleted(userId: $userId) {
      balance
      bank
      createdAt
      currency
      id
      name
      number
      type
      userId
      updatedAt
    }
  }
`;
