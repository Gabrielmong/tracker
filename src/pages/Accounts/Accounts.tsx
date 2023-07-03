import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import { AccountDetails, AccountTable, TransitionedPage } from 'components';
import { Account } from 'models';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const mockAccounts: Account[] = [
  {
    accountName: 'Checking',
    accountNumber: '12343256789',
    bank: 'Bank of America',
    type: 'Checking',
    currency: 'USD',
    availableBalance: 1000,
    createdAt: new Date(),
  },
  {
    accountName: 'Savings',
    accountNumber: '987654321',
    bank: 'Bank of America',
    type: 'Savings',
    currency: 'USD',
    availableBalance: 10000,
    createdAt: new Date(),
  },
  {
    accountName: 'Checking',
    accountNumber: '12345126789',
    bank: 'Bank of America',
    type: 'Checking',
    currency: 'USD',
    availableBalance: 1000,
    createdAt: new Date(),
  },
];

export const Accounts = () => {
  const [accounts, setAccounts] = useState<Account[]>(mockAccounts);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  const handleAccountClick = (account: Account) => {
    setSelectedAccount(account);
  };

  const handleAddAccount = () => {
    toast('Not implemented yet', { icon: '🚧' });
  };

  return (
    <TransitionedPage>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',

                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h4">Accounts</Typography>
                <Button
                  variant="text"
                  sx={{
                    textTransform: 'none',
                  }}
                  onClick={handleAddAccount}
                >
                  Add Account
                </Button>
              </Box>

              <AccountTable
                accounts={accounts}
                handleAccountClick={handleAccountClick}
                selectedAccount={selectedAccount}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={7}>
          <Card>
            <CardHeader title="Account Details">
              <Button
                variant="contained"
                onClick={() => setSelectedAccount(null)}
              >
                Back
              </Button>
            </CardHeader>

            {selectedAccount ? (
              <AccountDetails account={selectedAccount} />
            ) : (
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 265,
                }}
              >
                <Typography variant="body1">
                  Select an account to view details
                </Typography>
              </CardContent>
            )}
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={5}>
          <Card>
            <CardHeader title="Pending" />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 265,
              }}
            >
              <Typography variant="body1">Something will go here</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </TransitionedPage>
  );
};
