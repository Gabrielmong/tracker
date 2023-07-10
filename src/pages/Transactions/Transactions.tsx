import { Add, Delete, Edit, Search, Summarize } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Input,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { TransactionsTable, TransitionedPage } from 'components';
import { Transaction } from 'models';
import { useState } from 'react';

export const mockTransactions: Transaction[] = [
  {
    id: '1d8f97cc-4641-4389-9b19-1b9ced232f16',
    accountId: '1d8f97cc-4641-4389-9b19-1b9ced232f16',
    amount: 100,
    title: 'Transaction 1',
    date: new Date(),
    createdAt: new Date(),
    category: 'Food',
    description: 'Transaction 1',
    updatedAt: new Date(),
    userId: '1d8f97cc-4641-4389-9b19-1b9ced232f16',
  },
  {
    id: '1d8f97dc-4641-4389-9b19-1b9ced232f16',
    accountId: '1d8f97cc-4641-4389-9b19-1b9ced232f16',
    amount: -100,
    title: 'Transaction 2',
    date: new Date(),
    createdAt: new Date(),
    category: 'Food',
    description: 'Transaction 2',
    updatedAt: new Date(),
    userId: '1d8f97cc-4641-4389-9b19-1b9ced232f16',
  },
];

export const Transactions = () => {
  const [transactions, setTransactions] =
    useState<Transaction[]>(mockTransactions);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
  };

  return (
    <TransitionedPage>
      <Grid container spacing={2}>
        <Grid item xs={9} lg={10} xl={11}>
          <Card>
            <Box
              sx={{
                py: 1,
                px: 2,
                borderRadius: 4,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                Transactions
              </Typography>

              <Input
                placeholder="Search"
                sx={{
                  width: isSmall ? 120 : 200,
                }}
                endAdornment={
                  <Search
                    onClick={() => console.log('search')}
                    sx={{
                      cursor: 'pointer',
                    }}
                  />
                }
              />
            </Box>
          </Card>
        </Grid>

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
          >
            {isSmall ? <Add /> : 'Add new'}
          </Button>
        </Grid>

        <Grid item xs={12} md={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2,
                  }}
                >
                  <Typography variant="h6" component="div">
                    Account
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h4" component="div">
                      Saving Colones
                    </Typography>

                    <Typography variant="h4" component="div">
                      $ 1,000,000
                    </Typography>
                  </Box>

                  <Typography variant="h6" component="div">
                    BNCR
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 5,
                    }}
                  >
                    <Typography variant="body1" component="div">
                      123456789
                    </Typography>

                    <Typography variant="body2" component="div">
                      Savings Account
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Transaction Details
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h4" component="div">
                      Gym
                    </Typography>

                    <Typography variant="h4" component="div">
                      -$ 55,56
                    </Typography>
                  </Box>

                  <Typography variant="body1" component="div">
                    Jun 3, 2023
                  </Typography>

                  <Box
                    sx={{
                      mt: 3,
                    }}
                  >
                    <Typography variant="h6" component="div">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginY: 3,
                    }}
                  >
                    <Typography variant="body1" component="div">
                      Sent to
                    </Typography>

                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        ml: 1,
                      }}
                    >
                      Hutch gym tibás
                    </Typography>
                  </Box>

                  <Typography variant="body2" component="div">
                    1d8f97cc-4641-4389-9b19-1b9ced232f16
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    padding: 2,
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: '#763C3C',
                      height: 64,
                      width: 64,
                      padding: 0,
                      color: 'white',
                    }}
                  >
                    <Delete color="inherit" />
                  </Button>

                  <Button
                    sx={{
                      backgroundColor: '#32925E',
                      height: 64,
                      width: 64,
                      padding: 0,
                      color: 'white',
                    }}
                  >
                    <Edit color="inherit" />
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: '#27314A',
                      height: 64,
                      width: 64,
                      padding: 0,
                      color: 'white',
                    }}
                  >
                    <Summarize color="inherit" />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          sx={{
            minHeight: '100%',
          }}
        >
          <Card
            sx={{
              minHeight: '100%',
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" component="div">
                  Transactions
                </Typography>

                <Typography variant="body2" component="div">
                  Page 1 of 10
                </Typography>
              </Box>

              <TransactionsTable
                transactions={transactions}
                handleTransactionClick={handleTransactionClick}
                selectedTransaction={selectedTransaction}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </TransitionedPage>
  );
};
