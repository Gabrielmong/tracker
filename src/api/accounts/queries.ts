import { gql } from '@apollo/client';

export const GET_ACCOUNTS = gql`
  query Accounts($userId: String) {
    accounts(userId: $userId) {
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
