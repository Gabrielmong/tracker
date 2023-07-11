import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
  mutation AddAccount(
    $balance: Float
    $bank: String
    $currency: String
    $name: String
    $number: String
    $type: String
    $userId: String
  ) {
    addAccount(
      balance: $balance
      bank: $bank
      currency: $currency
      name: $name
      number: $number
      type: $type
      userId: $userId
    ) {
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
`;

export const DELETE_ACCOUNT = gql`
  mutation DeleteAccount($accountId: String) {
    deleteAccount(id: $accountId) {
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
`;
