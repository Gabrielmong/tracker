import { gql } from '@apollo/client';

export const CREATE_TRANSACTION = gql`
  mutation AddTransaction(
    $accountId: String
    $amount: Float
    $category: String
    $date: String
    $description: String
    $title: String
    $type: String
    $userId: String
    $sentTo: String
  ) {
    addTransaction(
      accountId: $accountId
      amount: $amount
      category: $category
      date: $date
      description: $description
      title: $title
      type: $type
      userId: $userId
      sentTo: $sentTo
    ) {
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
      }
    }
  }
`;

export const DELETE_TRANSACTION = gql`
  mutation DeleteTransaction($transactionId: String) {
    deleteTransaction(id: $transactionId) {
      accountId
      amount
      category
      createdAt
      date
      description
      id
      sentTo
      type
      title
      updatedAt
      userId
    }
  }
`;
