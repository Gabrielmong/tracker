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
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from 'hooks';
import { useQuery, useSubscription } from '@apollo/client';
import { GET_ACCOUNTS, ACCOUNT_ADDED, ACCOUNT_DELETED } from 'api';

export const Accounts = () => {
  const { user } = useAuth();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  const { data: accountAddedData } = useSubscription(ACCOUNT_ADDED, {
    variables: { userId: user.id },
  });

  const { data: accountDeletedData } = useSubscription(ACCOUNT_DELETED, {
    variables: { userId: user.id },
  });

  const { loading, error, data } = useQuery(GET_ACCOUNTS, {
    variables: { userId: user.id },
  });

  useEffect(() => {
    if (data) {
      setAccounts(data.accounts);
    }
  }, [data]);

  useEffect(() => {
    if (accountAddedData) {
      setAccounts((prevAccounts) => [
        ...prevAccounts,
        accountAddedData.accountAdded,
      ]);
    }
  }, [accountAddedData]);

  useEffect(() => {
    if (accountDeletedData) {
      setAccounts((prevAccounts) =>
        prevAccounts.filter(
          (account) => account.id !== accountDeletedData.accountDeleted.id,
        ),
      );
    }
  }, [accountDeletedData]);

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

              {loading ? (
                <Typography variant="body1">Loading...</Typography>
              ) : error ? (
                <Typography variant="body1">Error loading accounts</Typography>
              ) : (
                <>
                  {accounts && (
                    <AccountTable
                      accounts={accounts}
                      handleAccountClick={handleAccountClick}
                      selectedAccount={selectedAccount}
                    />
                  )}
                </>
              )}
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
