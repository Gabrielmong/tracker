import { gql } from '@apollo/client';

export const GET_COUNT = gql`
  query TransactionsCount($userId: String) {
    transactionsCount(userId: $userId)
  }
`;

export const GET_TRANSACTIONS = gql`
  query Transactions($userId: String, $skip: Int, $take: Int) {
    transactions(userId: $userId, skip: $skip, take: $take) {
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
