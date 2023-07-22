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
  GET_COUNT,
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
import { UpsertTransactionModal } from './components';

export const Transactions = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    skip: 0,
    take: 10,
    total: 0,
    pages: 0,
  });
  const [upsertModalOpen, setUpsertModalOpen] = useState(false);
  const [create, setCreate] = useState(false);

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
    variables: {
      userId: user.id,
      skip: pagination.skip,
      take: pagination.take,
    },
  });

  const { data: countData, refetch: refetchCount } = useQuery(GET_COUNT, {
    variables: { userId: user.id },
  });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (countData) {
      const { transactionsCount } = countData;
      const pages = Math.ceil(transactionsCount / pagination.take);
      setPagination((prevPagination) => ({
        ...prevPagination,
        total: transactionsCount,
        pages,
      }));
    }
  }, [countData]);

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
      refetchCount();
    }
  }, [refetchCount, transactionDeletedData]);

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

  const handleVanishDetails = () => {
    setSelectedTransaction(null);
    refetch();
    refetchCount();
  };

  const handlePageChange = (page: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      page,
      skip: (page - 1) * prevPagination.take,
    }));
  };

  const handleCreate = () => {
    setCreate(true);
    setUpsertModalOpen(true);
  };

  const handleUpsertModalClose = () => {
    setUpsertModalOpen(false);
  };

  const handleEditTransaction = () => {
    setCreate(false);
    setUpsertModalOpen(true);
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
            onClick={handleCreate}
          >
            {isSmall ? <Add /> : 'Add new'}
          </Button>
        </Grid>

        <TransactionDetails
          selectedTransaction={selectedTransaction}
          selectedAccount={selectedTransaction?.account}
          handleVanishDetails={handleVanishDetails}
          handleEditTransaction={handleEditTransaction}
        />

        <TransactionsTable
          pagination={pagination}
          handlePageChange={handlePageChange}
          transactions={transactions}
          handleTransactionClick={handleTransactionClick}
          selectedTransaction={selectedTransaction}
          loading={loading}
        />

        <UpsertTransactionModal
          open={upsertModalOpen}
          onClose={handleUpsertModalClose}
          updateTransaction={selectedTransaction}
          create={create}
        />
      </Grid>
    </TransitionedPage>
  );
};
