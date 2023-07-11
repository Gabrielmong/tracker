import { gql } from '@apollo/client';

export const TRANSACTION_ADDED = gql`
  subscription TransactionAdded($userId: String) {
    transactionAdded(userId: $userId) {
      account {
        balance
        bank
        createdAt
        currency
        id
        name
        number
        type
        updatedAt
        userId
      }
      accountId
      amount
      category
      createdAt
      date
      description
      id
      sentTo
      title
      type
      updatedAt
      userId
    }
  }
`;

export const TRANSACTION_DELETED = gql`
  subscription TransactionDeleted($userId: String) {
    transactionDeleted(userId: $userId) {
      account {
        balance
        bank
        createdAt
        currency
        id
        name
        number
        type
        updatedAt
        userId
      }
      accountId
      amount
      category
      createdAt
      date
      description
      id
      sentTo
      title
      type
      updatedAt
      userId
    }
  }
`;

export const TRANSACTION_UPDATED = gql`
  subscription TransactionUpdated($userId: String) {
    transactionUpdated(userId: $userId) {
      amount
      category
      createdAt
      date
      description
      id
      sentTo
      title
      type
      updatedAt
      userId
      accountId
      account {
        balance
        bank
        createdAt
        currency
        id
        name
        number
        type
        updatedAt
        userId
      }
    }
  }
`;
