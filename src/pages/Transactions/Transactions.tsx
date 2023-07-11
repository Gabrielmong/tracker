import { Add } from '@mui/icons-material';
import { Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import {
  SearchBar,
  TransactionDetails,
  TransactionsTable,
  TransitionedPage,
} from 'components';
import { Transaction } from 'models';
import { useEffect, useState } from 'react';
import {
  CREATE_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTIONS,
  TRANSACTION_ADDED,
  TRANSACTION_DELETED,
  TRANSACTION_UPDATED,
} from 'api/transactions';
import { useQuery, useSubscription, useMutation } from '@apollo/client';
import { useAuth } from 'hooks';
import { toast } from 'react-hot-toast';

export const Transactions = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const { data: transactionAddedData } = useSubscription(TRANSACTION_ADDED, {
    variables: { userId: user.id },
  });

  const { data: transactionDeletedData } = useSubscription(
    TRANSACTION_DELETED,
    {
      variables: { userId: user.id },
    },
  );

  const { data: transactionUpdatedData } = useSubscription(
    TRANSACTION_UPDATED,
    {
      variables: { userId: user.id },
    },
  );

  const { loading, error, data, refetch } = useQuery(GET_TRANSACTIONS, {
    variables: { userId: user.id },
  });

  const [createTransaction] = useMutation(CREATE_TRANSACTION);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      setTransactions(data.transactions);
    }
  }, [data]);

  useEffect(() => {
    if (transactionAddedData) {
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        transactionAddedData.transactionAdded,
      ]);
    }
  }, [transactionAddedData]);

  useEffect(() => {
    if (transactionDeletedData) {
      setTransactions((prevTransactions) =>
        prevTransactions.filter(
          (transaction) =>
            transaction.id !== transactionDeletedData.transactionDeleted.id,
        ),
      );
    }
  }, [transactionDeletedData]);

  useEffect(() => {
    if (transactionUpdatedData) {
      setTransactions((prevTransactions) =>
        prevTransactions.map((transaction) =>
          transaction.id === transactionUpdatedData.transactionUpdated.id
            ? transactionUpdatedData.transactionUpdated
            : transaction,
        ),
      );
    }
  }, [transactionUpdatedData]);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleCreateTransaction = async () => {
    try {
      const { data } = await createTransaction({
        variables: {
          accountId: '82560a31-9f59-4e45-8fba-043b10732aad',
          amount: -500,
          category: 'Expenses',
          date: '2021-10-10',
          description: 'Test',
          type: 'Expense',
          title: 'Test',
          userId: user.id,
          sentTo: 'Test',
        },
      });

      if (data) {
        toast.success('Transaction created successfully');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error creating transaction');
    }
  };

  const handleVanishDetails = () => {
    setSelectedTransaction(null);
  };

  return (
    <TransitionedPage>
      <Grid container spacing={2}>
        <SearchBar isSmall={isSmall} />

        <Grid item xs={3} lg={2} xl={1}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#32925E',
              color: 'white',
              borderRadius: 4,
              width: '100%',
              height: '100%',
              textTransform: 'none',
            }}
            onClick={handleCreateTransaction}
          >
            {isSmall ? <Add /> : 'Add new'}
          </Button>
        </Grid>

        <TransactionDetails
          selectedTransaction={selectedTransaction}
          selectedAccount={selectedTransaction?.account}
          handleVanishDetails={handleVanishDetails}
        />

        <TransactionsTable
          transactions={transactions}
          handleTransactionClick={handleTransactionClick}
          selectedTransaction={selectedTransaction}
          loading={loading}
        />
      </Grid>
    </TransitionedPage>
  );
};
