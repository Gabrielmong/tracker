import { gql } from '@apollo/client';

export const GET_TRANSACTIONS = gql`
  query Transactions($userId: String) {
    transactions(userId: $userId) {
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
