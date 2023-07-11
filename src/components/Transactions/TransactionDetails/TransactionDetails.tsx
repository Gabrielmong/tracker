import { Delete, Edit, Summarize } from '@mui/icons-material';
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import { Account, Transaction } from 'models';
import { formatCurrency } from 'utils';
import { TAccountDetails } from '../TAccountDetails';
import { TTransactionDetails } from '../TTransactionDetails';

export const TransactionDetails = ({
  selectedTransaction,
  selectedAccount,
  handleVanishDetails,
}: {
  selectedTransaction: Transaction | null;
  selectedAccount: Account | undefined;
  handleVanishDetails: () => void;
}) => {
  return (
    <Grid item xs={12} md={5}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            {selectedTransaction ? (
              <TAccountDetails account={selectedAccount} />
            ) : (
              <CardContent
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 200,
                }}
              >
                <Typography variant="h6" component="div">
                  Select a transaction to view details
                </Typography>
              </CardContent>
            )}
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            {selectedTransaction ? (
              <TTransactionDetails
                selectedTransaction={selectedTransaction}
                selectedAccount={selectedAccount}
                handleVanishDetails={handleVanishDetails}
              />
            ) : (
              <CardContent
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 400,
                }}
              >
                <Typography variant="h6" component="div">
                  Select a transaction to view details
                </Typography>
              </CardContent>
            )}
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
