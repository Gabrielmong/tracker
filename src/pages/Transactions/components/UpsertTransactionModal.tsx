import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { Account, Transaction } from 'models';
import React, { useEffect, useMemo, useState } from 'react';
import { GET_ACCOUNTS } from 'api/accounts';
import { useMutation, useQuery } from '@apollo/client';
import { useAuth } from 'hooks';
import { formatDate, getCurrecySymbol } from 'utils';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { CREATE_TRANSACTION } from 'api/transactions';
import toast from 'react-hot-toast';

const initialValues: Transaction = {
  account: {} as Account,
  id: '',
  description: '',
  amount: 0,
  date: new Date().toISOString(),
  accountId: '',
  userId: '',
  category: '',
  title: '',
  type: '',
};

export const UpsertTransactionModal = ({
  open,
  onClose,
  updateTransaction,
  create,
}: {
  open: boolean;
  onClose: () => void;
  updateTransaction?: Transaction | null;
  create?: boolean;
}) => {
  const { user } = useAuth();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transaction, setTransaction] = useState<Transaction>(initialValues);
  const [cardTitle, setCardTitle] = useState<string>('Add Transaction');
  const accountSelected = useMemo(
    () => transaction?.accountId !== '',
    [transaction],
  );
  const [dayValue, setDayValue] = useState<Dayjs | null>(null);

  const [createTransaction] = useMutation(CREATE_TRANSACTION);

  const { data: accountsData } = useQuery(GET_ACCOUNTS, {
    variables: {
      userId: user.id,
    },
  });

  useEffect(() => {
    if (accountsData) {
      setAccounts(accountsData.accounts);
    }
  }, [accountsData]);

  useEffect(() => {
    if (create) {
      setCardTitle('Add Transaction');
      setTransaction(initialValues);
    } else {
      if (updateTransaction) {
        setCardTitle('Edit Transaction');
        setTransaction(updateTransaction);
        setDayValue(
          updateTransaction.date
            ? dayjs(formatDate(updateTransaction.date))
            : null,
        );
      }
    }
  }, [create, updateTransaction]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTransaction({
      ...transaction,
      [name]: value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;

    const account = accounts.find((account) => account.id === value);

    setTransaction({
      ...transaction,
      account,
      [name]: value,
    });
  };

  const handleDateChange = (date: Dayjs | null) => {
    setDayValue(date);
    setTransaction({
      ...transaction,
      date: date?.toISOString() || '',
    });
  };

  const handleSave = () => {
    if (create) {
      handleCreateTransaction();
    } else {
      console.log('update');
    }
  };

  const handleCreateTransaction = async () => {
    try {
      const { data } = await createTransaction({
        variables: {
          accountId: transaction.accountId,
          amount: Number(transaction.amount),
          category: transaction.category,
          date: transaction.date,
          description: transaction.description,
          type: transaction.type,
          title: transaction.title,
          userId: user.id,
          sentTo: transaction.sentTo,
        },
      });

      if (data) {
        toast.success('Transaction created successfully');
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error('Error creating transaction');
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card sx={{ p: 2 }}>
        <CardHeader title={cardTitle} />

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <FormControl fullWidth required>
            <TextField
              name="title"
              label="Title"
              value={transaction?.title}
              onChange={handleInputChange}
              variant="standard"
            />
          </FormControl>

          <FormControl fullWidth required>
            <TextField
              name="description"
              label="Description"
              value={transaction?.description}
              onChange={handleInputChange}
              variant="standard"
              multiline
            />
          </FormControl>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}
          >
            <FormControl fullWidth required>
              <TextField
                name="type"
                label="Type"
                value={transaction?.type}
                onChange={handleInputChange}
                variant="standard"
              />
            </FormControl>
            <FormControl fullWidth required>
              <InputLabel id="account-label">Account</InputLabel>
              <Select
                name="accountId"
                labelId="account-label"
                label="Account"
                value={transaction?.accountId}
                onChange={handleSelectChange}
              >
                {accounts.map((account) => (
                  <MenuItem key={account.id} value={account.id}>
                    {account.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {accountSelected && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                }}
              >
                <FormControl fullWidth required>
                  <TextField
                    name="amount"
                    label="Amount"
                    value={transaction?.amount}
                    onChange={handleInputChange}
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography variant="body1">
                            {getCurrecySymbol(
                              transaction?.account?.currency || 'CRC',
                            )}
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>

                <FormControl fullWidth required>
                  <TextField
                    name="sentTo"
                    label="Sent to"
                    value={transaction?.sentTo}
                    onChange={handleInputChange}
                    variant="standard"
                  />
                </FormControl>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                }}
              >
                <FormControl fullWidth required>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    name="category"
                    labelId="category-label"
                    label="Category"
                    value={transaction?.category}
                    onChange={handleSelectChange}
                  >
                    <MenuItem value="food">Food</MenuItem>
                    <MenuItem value="transport">Transport</MenuItem>
                    <MenuItem value="entertainment">Entertainment</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth required>
                  <DatePicker
                    label="Date"
                    value={dayValue}
                    onChange={handleDateChange}
                  />
                </FormControl>
              </Box>

              <CardActions
                sx={{
                  alignSelf: 'flex-end',
                  mt: 2,
                }}
              >
                <Button
                  variant="contained"
                  onClick={onClose}
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSave}
                  sx={{
                    backgroundColor: '#32925E',
                    color: '#fff',
                    textTransform: 'none',
                  }}
                >
                  Save
                </Button>
              </CardActions>
            </>
          )}
        </CardContent>
      </Card>
    </Modal>
  );
};
